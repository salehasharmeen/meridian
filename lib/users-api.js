import { seedUsers } from "./mock-data";
import { validateUser } from "./validation";

export const ROLES = ["Admin", "Editor", "Viewer"];
export const STATUSES = ["Active", "Invited", "Suspended"];

const LATENCY_MS = 250;

// In-memory store standing in for a database. To use a real backend,
// replace each method body below with a fetch() call; callers stay unchanged.
let users = seedUsers.map((user) => ({ ...user }));

const respond = (value) =>
  new Promise((resolve) => setTimeout(() => resolve(structuredClone(value)), LATENCY_MS));

const reject = (message) =>
  new Promise((_, fail) => setTimeout(() => fail(new Error(message)), LATENCY_MS));

/** Re-validates on the "server" side and keeps only whitelisted fields. */
function sanitize(input) {
  const errors = validateUser(input);
  if (Object.keys(errors).length || !ROLES.includes(input.role) || !STATUSES.includes(input.status)) {
    return null;
  }
  return {
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    role: input.role,
    status: input.status,
  };
}

const isEmailTaken = (email, ignoreId) => users.some((u) => u.email === email && u.id !== ignoreId);

export const usersApi = {
  list: () => respond(users),

  create(input) {
    const fields = sanitize(input);
    if (!fields) return reject("Invalid user details.");
    if (isEmailTaken(fields.email)) return reject("That email address is already in use.");

    const user = { ...fields, id: crypto.randomUUID(), joined: new Date().toISOString().slice(0, 10) };
    users = [user, ...users];
    return respond(user);
  },

  update(input) {
    const fields = sanitize(input);
    const existing = users.find((u) => u.id === input.id);
    if (!fields || !existing) return reject("Invalid user details.");
    if (isEmailTaken(fields.email, existing.id)) return reject("That email address is already in use.");

    const user = { ...existing, ...fields };
    users = users.map((u) => (u.id === user.id ? user : u));
    return respond(user);
  },

  remove(id) {
    users = users.filter((u) => u.id !== id);
    return respond(id);
  },
};

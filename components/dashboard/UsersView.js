"use client";

import { useEffect, useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Input, Select } from "@/components/ui/Field";
import Icon from "@/components/ui/Icon";
import Modal from "@/components/ui/Modal";
import { ROLES, STATUSES, usersApi } from "@/lib/users-api";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const ALL = "All";
const NEW_USER = { name: "", email: "", role: "Viewer", status: "Active" };
const NOTICE_DURATION_MS = 2500;

const filterOptions = (allLabel, values) => [{ value: ALL, label: allLabel }, ...values];

export default function UsersView() {
  const [users, setUsers] = useState(null);
  const [query, setQuery] = useState("");
  const [role, setRole] = useState(ALL);
  const [status, setStatus] = useState(ALL);
  const [dialog, setDialog] = useState(null); // { type: "form" | "delete", user }
  const [notice, setNotice] = useState("");

  useEffect(() => {
    usersApi.list().then(setUsers);
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), NOTICE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [notice]);

  const visibleUsers = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return (users ?? []).filter(
      (user) =>
        (role === ALL || user.role === role) &&
        (status === ALL || user.status === status) &&
        `${user.name} ${user.email}`.toLowerCase().includes(needle),
    );
  }, [users, query, role, status]);

  const closeDialog = () => setDialog(null);

  async function saveUser(values) {
    const isEdit = Boolean(values.id);
    const saved = await (isEdit ? usersApi.update(values) : usersApi.create(values));

    setUsers((current) => (isEdit ? current.map((u) => (u.id === saved.id ? saved : u)) : [saved, ...current]));
    setNotice(isEdit ? "User updated" : "User added");
    closeDialog();
  }

  async function deleteUser() {
    const { id } = dialog.user;
    await usersApi.remove(id);

    setUsers((current) => current.filter((u) => u.id !== id));
    setNotice("User deleted");
    closeDialog();
  }

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-wrap items-center gap-3 p-5">
        <div className="relative min-w-[200px] flex-1">
          <Icon name="search" className="absolute left-4 top-3 h-4 w-4 text-muted" />
          <Input
            aria-label="Search users"
            placeholder="Search by name or email"
            className="pl-10"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <Select
          aria-label="Filter by role"
          className="w-auto"
          options={filterOptions("All roles", ROLES)}
          value={role}
          onChange={(event) => setRole(event.target.value)}
        />
        <Select
          aria-label="Filter by status"
          className="w-auto"
          options={filterOptions("All statuses", STATUSES)}
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        />
        <Button onClick={() => setDialog({ type: "form", user: NEW_USER })}>
          <Icon name="plus" className="h-4 w-4" />
          Add user
        </Button>
      </div>

      <UserTable
        users={visibleUsers}
        loading={!users}
        onEdit={(user) => setDialog({ type: "form", user })}
        onDelete={(user) => setDialog({ type: "delete", user })}
      />

      <p className="p-4 text-xs text-muted">
        Showing {visibleUsers.length} of {users?.length ?? 0} users
      </p>

      {dialog?.type === "form" && (
        <Modal title={dialog.user.id ? "Edit user" : "Add user"} onClose={closeDialog}>
          <UserForm initialValues={dialog.user} onSave={saveUser} onCancel={closeDialog} />
        </Modal>
      )}

      {dialog?.type === "delete" && (
        <Modal title="Delete user" onClose={closeDialog}>
          <p className="text-muted">
            Delete <strong className="text-ink">{dialog.user.name}</strong>? They lose access immediately and this can&apos;t
            be undone.
          </p>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="ghost" onClick={closeDialog}>
              Cancel
            </Button>
            <Button variant="danger" onClick={deleteUser}>
              Delete user
            </Button>
          </div>
        </Modal>
      )}

      {notice && (
        <div role="status" className="fixed bottom-5 right-5 z-50 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-lime">
          {notice}
        </div>
      )}
    </Card>
  );
}

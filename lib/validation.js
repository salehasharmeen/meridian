const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const NAME_MAX_LENGTH = 80;
export const EMAIL_MAX_LENGTH = 120;

/** Returns a map of field name to error message. Empty when the input is valid. */
export function validateUser({ name, email }) {
  const errors = {};
  const trimmedName = name.trim();

  if (trimmedName.length < 2 || trimmedName.length > NAME_MAX_LENGTH) {
    errors.name = "Enter the full name.";
  }
  if (email.length > EMAIL_MAX_LENGTH || !EMAIL_PATTERN.test(email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  return errors;
}

"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Field, Input, Select } from "@/components/ui/Field";
import { ROLES, STATUSES } from "@/lib/users-api";
import { EMAIL_MAX_LENGTH, NAME_MAX_LENGTH, validateUser } from "@/lib/validation";

export default function UserForm({ initialValues, onSave, onCancel }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const bind = (field) => ({
    value: values[field],
    onChange: (event) => setValues({ ...values, [field]: event.target.value }),
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const found = validateUser(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setSubmitting(true);
    try {
      await onSave(values);
    } catch (error) {
      setErrors({ form: error.message });
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <Field label="Full name" error={errors.name}>
        <Input autoFocus maxLength={NAME_MAX_LENGTH} autoComplete="off" {...bind("name")} />
      </Field>
      <Field label="Email" error={errors.email}>
        <Input type="email" maxLength={EMAIL_MAX_LENGTH} autoComplete="off" {...bind("email")} />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Role">
          <Select options={ROLES} {...bind("role")} />
        </Field>
        <Field label="Status">
          <Select options={STATUSES} {...bind("status")} />
        </Field>
      </div>

      {errors.form && (
        <p role="alert" className="text-sm text-danger">
          {errors.form}
        </p>
      )}

      <div className="flex justify-end gap-2 pt-2">
        <Button variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={submitting}>
          Save user
        </Button>
      </div>
    </form>
  );
}

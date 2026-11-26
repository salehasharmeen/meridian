"use client";

import { useState } from "react";
import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Field, Input, Select } from "@/components/ui/Field";
import Toggle from "@/components/ui/Toggle";
import { adminProfile, timezones } from "@/lib/mock-data";

const PROFILE_FIELDS = [
  { name: "name", label: "Full name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "company", label: "Company", type: "text" },
];

const NOTIFICATIONS = [
  { name: "weekly", label: "Weekly revenue email", description: "A summary every Monday at 9am." },
  { name: "churn", label: "Churn alerts", description: "Get notified when churn rises above 3%." },
  { name: "product", label: "Product updates", description: "New features and release notes." },
];

export default function SettingsView() {
  const [profile, setProfile] = useState(adminProfile);
  const [notifications, setNotifications] = useState({ weekly: true, churn: true, product: false });
  const [saved, setSaved] = useState(false);

  const update = (setter, key, value) => {
    setter((current) => ({ ...current, [key]: value }));
    setSaved(false);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSaved(true);
      }}
      className="grid gap-5 lg:grid-cols-2"
    >
      <Card className="space-y-4 p-6">
        <div className="flex items-center gap-4">
          <Avatar name={profile.name || "?"} className="h-16 w-16" />
          <div>
            <h2 className="text-2xl font-extrabold">Profile</h2>
            <p className="text-sm text-muted">Shown to your teammates.</p>
          </div>
        </div>

        {PROFILE_FIELDS.map(({ name, label, type }) => (
          <Field key={name} label={label}>
            <Input
              type={type}
              required
              maxLength={120}
              value={profile[name]}
              onChange={(event) => update(setProfile, name, event.target.value)}
            />
          </Field>
        ))}

        <Field label="Time zone">
          <Select options={timezones} value={profile.timezone} onChange={(event) => update(setProfile, "timezone", event.target.value)} />
        </Field>
      </Card>

      <Card className="self-start divide-y divide-ink/10 p-6">
        <h2 className="pb-4 text-2xl font-extrabold">Notifications</h2>
        {NOTIFICATIONS.map(({ name, label, description }) => (
          <Toggle
            key={name}
            label={label}
            description={description}
            checked={notifications[name]}
            onChange={(value) => update(setNotifications, name, value)}
          />
        ))}
      </Card>

      <div className="flex items-center gap-4 lg:col-span-2">
        <Button type="submit" size="lg">
          Save changes
        </Button>
        {saved && (
          <span role="status" className="rounded-full bg-lime px-4 py-2 text-sm font-bold">
            Changes saved
          </span>
        )}
      </div>
    </form>
  );
}

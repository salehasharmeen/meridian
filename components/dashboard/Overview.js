"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Avatar from "@/components/ui/Avatar";
import Card from "@/components/ui/Card";
import { stats } from "@/lib/mock-data";
import { usersApi } from "@/lib/users-api";
import RevenueChart from "./RevenueChart";
import StatCard from "./StatCard";

const RECENT_COUNT = 5;

function RecentSignups() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    usersApi.list().then((list) => {
      setUsers([...list].sort((a, b) => b.joined.localeCompare(a.joined)).slice(0, RECENT_COUNT));
    });
  }, []);

  return (
    <Card className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-extrabold">Recent signups</h2>
        <Link href="/dashboard/users" className="text-sm font-semibold underline-offset-4 hover:underline">
          View all
        </Link>
      </div>

      {!users ? (
        <p className="text-sm text-muted">Loading...</p>
      ) : (
        <ul className="space-y-4">
          {users.map(({ id, name, email }) => (
            <li key={id} className="flex items-center gap-3">
              <Avatar name={name} className="h-11 w-11" />
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">{name}</span>
                <span className="block truncate text-xs text-muted">{email}</span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default function Overview() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
        <RevenueChart />
        <RecentSignups />
      </div>
    </div>
  );
}

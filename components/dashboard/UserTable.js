import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import StatusBadge from "./StatusBadge";

const COLUMNS = ["User", "Role", "Status", "Joined", ""];

function EmptyRow({ children }) {
  return (
    <tr>
      <td colSpan={COLUMNS.length} className="p-8 text-center text-muted">
        {children}
      </td>
    </tr>
  );
}

export default function UserTable({ users, loading, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-y-2 border-ink/10 text-left text-muted">
            {COLUMNS.map((column) => (
              <th key={column} scope="col" className="px-5 py-3 font-medium">
                {column || <span className="sr-only">Actions</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading && <EmptyRow>Loading users...</EmptyRow>}
          {!loading && !users.length && <EmptyRow>No users match these filters.</EmptyRow>}

          {users.map((user) => (
            <tr key={user.id} className="border-b border-ink/10 transition-colors last:border-0 hover:bg-mint/60">
              <td className="px-5 py-3">
                <div className="flex items-center gap-3">
                  <Avatar name={user.name} className="h-11 w-11" />
                  <span>
                    <span className="block font-semibold">{user.name}</span>
                    <span className="text-muted">{user.email}</span>
                  </span>
                </div>
              </td>
              <td className="px-5 py-3">{user.role}</td>
              <td className="px-5 py-3">
                <StatusBadge status={user.status} />
              </td>
              <td className="whitespace-nowrap px-5 py-3 text-muted">{user.joined}</td>
              <td className="px-5 py-3">
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="icon" aria-label={`Edit ${user.name}`} onClick={() => onEdit(user)}>
                    <Icon name="edit" className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label={`Delete ${user.name}`} onClick={() => onDelete(user)}>
                    <Icon name="trash" className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { cn } from "@/lib/utils";

const controlClass =
  "w-full rounded-2xl border-2 border-ink/15 bg-bone px-4 py-2.5 text-sm outline-none transition-colors focus:border-ink";

export function Input({ className, ...props }) {
  return <input className={cn(controlClass, className)} {...props} />;
}

/** `options` accepts plain strings or `{ value, label }` objects. */
export function Select({ options, className, ...props }) {
  return (
    <select className={cn(controlClass, className)} {...props}>
      {options.map((option) => {
        const { value, label } = typeof option === "string" ? { value: option, label: option } : option;
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
}

export function Field({ label, error, children }) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <span className="mt-1.5 block font-normal">{children}</span>
      {error && <span className="mt-1 block text-xs font-medium text-danger">{error}</span>}
    </label>
  );
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ShieldAlert } from "lucide-react";

export const ROLES = ["Nurse", "Doctor", "Patient", "Caregiver"] as const;
export type Role = (typeof ROLES)[number];

export function LogoBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl bg-gradient-brand font-bold text-primary-foreground shadow-soft ${className}`}
      aria-hidden="true"
    >
      S
    </span>
  );
}

export function Header({ role, onRoleChange }: { role: Role; onRoleChange: (r: Role) => void }) {
  return (
    <header className="sticky top-0 z-10 border-b border-border/70 bg-card/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-5 py-3.5">
        <div className="flex items-center gap-3">
          <LogoBadge className="size-10 text-lg" />
          <div className="leading-tight">
            <h1 className="text-base font-bold tracking-tight">Sukino Healthcare</h1>
            <p className="text-xs text-muted-foreground">
              Clinical document assistant · India
            </p>

          </div>
        </div>

        <div className="ml-auto flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">Viewing as</span>
            <Select value={role} onValueChange={(v) => onRoleChange(v as Role)}>
              <SelectTrigger className="h-9 w-[132px] rounded-full border-border bg-background text-sm font-medium">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ROLES.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground">
            <ShieldAlert className="size-3.5" />
            Not a substitute for professional medical advice
          </span>
        </div>
      </div>
    </header>
  );
}

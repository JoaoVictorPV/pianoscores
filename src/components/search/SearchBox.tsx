"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/cn";
import { MVP_KEYS, type KeySlug } from "@/content/keys";

export function SearchBox({
  className,
  onPickKey,
}: {
  className?: string;
  onPickKey?: (slug: KeySlug) => void;
}) {
  const [q, setQ] = React.useState("");

  const results = React.useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [] as { slug: KeySlug; label: string }[];
    return MVP_KEYS
      .filter((k) => k.label.toLowerCase().includes(s) || k.slug.includes(s))
      .slice(0, 4)
      .map((k) => ({ slug: k.slug, label: k.label }));
  }, [q]);

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel-900)] px-4 py-3 shadow-[var(--shadow-glow-sm)]">
        <Search className="h-5 w-5 text-[var(--color-muted)]" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full bg-transparent text-sm text-[var(--color-foreground)] placeholder:text-[color-mix(in_oklab,var(--color-muted),transparent_30%)] focus:outline-none"
          placeholder="Buscar (MVP: tonalidades)…"
          aria-label="Buscar na enciclopédia"
        />
      </div>

      {results.length > 0 ? (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel-900)] shadow-[var(--shadow-glow)]">
          {results.map((r) => (
            <button
              key={r.slug}
              type="button"
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-[var(--color-foreground)] hover:bg-[color-mix(in_oklab,var(--color-panel-900),white_6%)]"
              onClick={() => {
                onPickKey?.(r.slug);
                setQ("");
              }}
            >
              <span>{r.label}</span>
              <span className="text-[var(--color-muted)]">abrir</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

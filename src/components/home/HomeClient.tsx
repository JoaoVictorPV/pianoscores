"use client";

import * as React from "react";

import { MVP_KEYS, type KeySlug } from "@/content/keys";
import { CircleOfFifths } from "@/components/circle/CircleOfFifths";
import { KeyDrawer } from "@/components/key/KeyDrawer";
import { SearchBox } from "@/components/search/SearchBox";
import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { useProgressStore } from "@/store/progressStore";
import { currentStreakWeeks } from "@/lib/streak";

export function HomeClient() {
  const [selected, setSelected] = React.useState<KeySlug | null>(null);

  const { progress, hydrated, hydrate } = useProgressStore();

  React.useEffect(() => {
    if (!hydrated) hydrate();
  }, [hydrated, hydrate]);

  const streak = hydrated ? currentStreakWeeks(progress) : 0;
  const selectedContent = selected ? MVP_KEYS.find((k) => k.slug === selected) : null;

  return (
    <div className="relative flex-1">
      {/* background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(20,199,255,0.22), transparent 40%), radial-gradient(circle at 80% 30%, rgba(77,225,255,0.12), transparent 45%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-8 md:px-8 md:py-12">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Cronograma de Piano
              </h1>
              <Badge>beta</Badge>
              <Badge>streak: {streak} semana(s)</Badge>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-[var(--color-muted)] md:text-base">
              Entre numa tonalidade. Saia com um mundo novo na cabeça.
            </p>
          </div>

          <div className="w-full md:w-[420px]">
            <SearchBox onPickKey={(slug) => setSelected(slug)} />
          </div>
        </header>

        <main className="mt-8 grid grid-cols-1 gap-6 md:mt-10">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>O Observatório das Quintas</CardTitle>
              <CardDescription>
                Toque numa tonalidade para abrir o “Simpósio” (drawer). O brilho vai aumentar
                conforme você marca exercícios e repertório.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CircleOfFifths onPickKey={(slug) => setSelected(slug)} />
            </CardContent>
          </Card>
        </main>
      </div>

      {selectedContent ? (
        <KeyDrawer open onOpenChange={(open) => !open && setSelected(null)} keyContent={selectedContent} />
      ) : null}
    </div>
  );
}

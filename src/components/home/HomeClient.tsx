"use client";

import * as React from "react";

import { MVP_KEYS, type KeySlug } from "@/content/keys";
import { CircleOfFifths } from "@/components/circle/CircleOfFifths";
import { KeyDrawer } from "@/components/key/KeyDrawer";

export function HomeClient() {
  const [selected, setSelected] = React.useState<KeySlug | null>(null);
  const selectedContent = selected ? MVP_KEYS.find((k) => k.slug === selected) : null;

  return (
    <div className="relative flex-1">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-10 md:px-8 md:py-14">
        <h1 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Observatório das Quintas
        </h1>
        <div className="mt-8">
          <CircleOfFifths onPickKey={(slug) => setSelected(slug)} />
        </div>
      </div>

      {selectedContent ? (
        <KeyDrawer open onOpenChange={(open) => !open && setSelected(null)} keyContent={selectedContent} />
      ) : null}
    </div>
  );
}

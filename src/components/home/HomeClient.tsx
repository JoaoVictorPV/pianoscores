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
      <div className="relative mx-auto flex min-h-[calc(100vh-0px)] w-full flex-col items-center justify-center px-4 py-6 md:px-8">
        <CircleOfFifths onPickKey={(slug) => setSelected(slug)} />
      </div>

      {selectedContent ? (
        <KeyDrawer open onOpenChange={(open) => !open && setSelected(null)} keyContent={selectedContent} />
      ) : null}
    </div>
  );
}

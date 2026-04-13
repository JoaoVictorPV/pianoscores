"use client";

import { z } from "zod";

const STORAGE_KEY = "pianoscores:v1";

export const keySlugSchema = z.enum([
  "c-major",
  "g-major",
  "d-major",
  "a-major",
  "e-major",
  "b-major",
  "fsharp-major",
  "csharp-major",
  "ab-major",
  "eb-major",
  "bb-major",
  "f-major",
  "a-minor",
  "e-minor",
  "b-minor",
  "dsharp-minor",
  "asharp-minor",
  "f-minor",
  "c-minor",
  "g-minor",
  "d-minor",
  "fsharp-minor",
  "csharp-minor",
  "gsharp-minor",
]);

export const userProgressSchema = z.object({
  version: z.literal(1),
  updatedAt: z.number(),
  keys: z.record(
    keySlugSchema,
    z.object({
      exercisesDone: z.array(z.string()).default([]),
      repertoireDone: z.array(z.string()).default([]),
      concludedAt: z.number().nullable().default(null),
    }),
  ),
});

export type UserProgress = z.infer<typeof userProgressSchema>;

export function emptyProgress(): UserProgress {
  return {
    version: 1,
    updatedAt: Date.now(),
    keys: {
      "c-major": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "g-major": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "d-major": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "a-major": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "e-major": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "b-major": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "fsharp-major": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "csharp-major": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "ab-major": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "eb-major": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "bb-major": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "f-major": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "a-minor": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "e-minor": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "b-minor": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "dsharp-minor": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "asharp-minor": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "f-minor": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "c-minor": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "g-minor": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "d-minor": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "fsharp-minor": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "csharp-minor": { exercisesDone: [], repertoireDone: [], concludedAt: null },
      "gsharp-minor": { exercisesDone: [], repertoireDone: [], concludedAt: null },
    },
  };
}

export function loadProgress(): UserProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = userProgressSchema.safeParse(JSON.parse(raw));
    if (!parsed.success) return emptyProgress();
    // Merge with the latest empty schema so older localStorage versions
    // automatically gain new keys without losing existing progress.
    const base = emptyProgress();
    return {
      ...base,
      ...parsed.data,
      keys: {
        ...base.keys,
        ...parsed.data.keys,
      },
    };
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(p: UserProgress) {
  const next: UserProgress = { ...p, updatedAt: Date.now() };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

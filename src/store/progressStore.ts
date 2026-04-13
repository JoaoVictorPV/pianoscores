"use client";

import { create } from "zustand";

import { type UserProgress, emptyProgress, loadProgress, saveProgress } from "@/lib/storage";

type ProgressState = {
  progress: UserProgress;
  hydrated: boolean;

  hydrate: () => void;

  toggleExercise: (key: keyof UserProgress["keys"], exerciseId: string) => void;
  toggleRepertoire: (key: keyof UserProgress["keys"], pieceId: string) => void;
  concludeKeyIfEligible: (
    key: keyof UserProgress["keys"],
    requirements: { exerciseIds: string[]; minPiecesDone: number },
  ) => void;
  resetAll: () => void;
};

function toggleInArray(arr: string[], id: string) {
  return arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id];
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  progress: emptyProgress(),
  hydrated: false,

  hydrate: () => {
    const p = loadProgress();
    set({ progress: p, hydrated: true });
  },

  toggleExercise: (key, exerciseId) => {
    const cur = get().progress;
    const next: UserProgress = {
      ...cur,
      keys: {
        ...cur.keys,
        [key]: {
          ...cur.keys[key],
          exercisesDone: toggleInArray(cur.keys[key].exercisesDone, exerciseId),
        },
      },
    };
    saveProgress(next);
    set({ progress: next });
  },

  toggleRepertoire: (key, pieceId) => {
    const cur = get().progress;
    const next: UserProgress = {
      ...cur,
      keys: {
        ...cur.keys,
        [key]: {
          ...cur.keys[key],
          repertoireDone: toggleInArray(cur.keys[key].repertoireDone, pieceId),
        },
      },
    };
    saveProgress(next);
    set({ progress: next });
  },

  concludeKeyIfEligible: (key, requirements) => {
    const cur = get().progress;
    const k = cur.keys[key];
    const exercisesOk = requirements.exerciseIds.every((id) => k.exercisesDone.includes(id));
    const piecesOk = k.repertoireDone.length >= requirements.minPiecesDone;
    if (!exercisesOk || !piecesOk) return;

    if (k.concludedAt) return; // already concluded

    const next: UserProgress = {
      ...cur,
      keys: {
        ...cur.keys,
        [key]: {
          ...k,
          concludedAt: Date.now(),
        },
      },
    };

    saveProgress(next);
    set({ progress: next });
  },

  resetAll: () => {
    const p = emptyProgress();
    saveProgress(p);
    set({ progress: p });
  },
}));

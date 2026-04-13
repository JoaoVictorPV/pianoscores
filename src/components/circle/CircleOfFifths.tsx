"use client";

import * as React from "react";

import { cn } from "@/lib/cn";
import { MVP_KEYS, type KeySlug } from "@/content/keys";
import { useProgressStore } from "@/store/progressStore";

type KeyId = "C" | "G" | "D" | "A" | "E" | "B" | "F#" | "C#" | "Ab" | "Eb" | "Bb" | "F";

const KEYS: { id: KeyId; label: string }[] = [
  { id: "C", label: "C" },
  { id: "G", label: "G" },
  { id: "D", label: "D" },
  { id: "A", label: "A" },
  { id: "E", label: "E" },
  { id: "B", label: "B" },
  { id: "F#", label: "F♯" },
  { id: "C#", label: "C♯" },
  { id: "Ab", label: "A♭" },
  { id: "Eb", label: "E♭" },
  { id: "Bb", label: "B♭" },
  { id: "F", label: "F" },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

function fmt(n: number) {
  // Reduce floating-point noise to avoid SSR/CSR hydration mismatches.
  return n.toFixed(4);
}

function describeArc(
  cx: number,
  cy: number,
  rOuter: number,
  rInner: number,
  startAngle: number,
  endAngle: number,
) {
  const startOuter = polarToCartesian(cx, cy, rOuter, endAngle);
  const endOuter = polarToCartesian(cx, cy, rOuter, startAngle);

  const startInner = polarToCartesian(cx, cy, rInner, startAngle);
  const endInner = polarToCartesian(cx, cy, rInner, endAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    fmt(startOuter.x),
    fmt(startOuter.y),
    "A",
    fmt(rOuter),
    fmt(rOuter),
    0,
    largeArcFlag,
    0,
    fmt(endOuter.x),
    fmt(endOuter.y),
    "L",
    fmt(startInner.x),
    fmt(startInner.y),
    "A",
    fmt(rInner),
    fmt(rInner),
    0,
    largeArcFlag,
    1,
    fmt(endInner.x),
    fmt(endInner.y),
    "Z",
  ].join(" ");
}

export function CircleOfFifths({
  className,
  onPickKey,
}: {
  className?: string;
  onPickKey?: (slug: KeySlug) => void;
}) {
  const size = 520;
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = 220;
  const rInner = 150;

  const { progress, hydrated, hydrate } = useProgressStore();

  React.useEffect(() => {
    if (!hydrated) hydrate();
  }, [hydrated, hydrate]);

  const keyToSlug: Partial<Record<KeyId, KeySlug>> = {
    C: "c-major",
    G: "g-major",
    D: "d-major",
    A: "a-minor", // placeholder: A sector used for A minor in MVP
  };

  function pctForKey(id: KeyId) {
    const slug = keyToSlug[id];
    if (!slug) return 0;
    const content = MVP_KEYS.find((k) => k.slug === slug);
    if (!content) return 0;
    const k = progress.keys[slug];
    const total = content.mechanical.exercises.length + content.repertoire.items.length;
    const done = k.exercisesDone.length + k.repertoireDone.length;
    return total === 0 ? 0 : Math.round((done / total) * 100);
  }

  return (
    <div className={cn("flex w-full items-center justify-center", className)}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-[320px] w-[320px] md:h-[420px] md:w-[420px]"
        role="img"
        aria-label="Círculo das Quintas"
      >
        <defs>
          <radialGradient id="ringGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(20,199,255,0.20)" />
            <stop offset="70%" stopColor="rgba(20,199,255,0.06)" />
            <stop offset="100%" stopColor="rgba(20,199,255,0.00)" />
          </radialGradient>
        </defs>

        <circle cx={cx} cy={cy} r={rOuter + 35} fill="url(#ringGlow)" />
        <circle
          cx={cx}
          cy={cy}
          r={rOuter + 2}
          fill="none"
          stroke="rgba(77,225,255,0.20)"
        />
        <circle
          cx={cx}
          cy={cy}
          r={rInner - 2}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
        />

        {KEYS.map((k, idx) => {
          const segAngle = 360 / KEYS.length;
          const startAngle = idx * segAngle;
          const endAngle = (idx + 1) * segAngle;

          const path = describeArc(cx, cy, rOuter, rInner, startAngle, endAngle);

          const pct = pctForKey(k.id);
          const base = 0.03;
          const glow = 0.26;
          const alpha = base + (pct / 100) * glow;
          const fill = `rgba(20,199,255,${alpha.toFixed(3)})`;

          const midAngle = (startAngle + endAngle) / 2;
          const labelPos = polarToCartesian(cx, cy, (rOuter + rInner) / 2, midAngle);
          const slug = keyToSlug[k.id];
          return (
            <g key={k.id}>
              <path
                d={path}
                fill={fill}
                stroke="rgba(255,255,255,0.06)"
                className={cn(
                  "transition-colors",
                  slug ? "cursor-pointer hover:fill-[rgba(20,199,255,0.22)]" : "opacity-60",
                )}
                onClick={() => {
                  if (!slug) return;
                  onPickKey?.(slug);
                }}
              />
              <text
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={18}
                fill="rgba(233,238,247,0.9)"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {k.label}
              </text>
            </g>
          );
        })}

        <circle cx={cx} cy={cy} r={112} fill="rgba(14,17,27,0.9)" stroke="rgba(255,255,255,0.06)" />
        <text
          x={cx}
          y={cy - 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={14}
          fill="rgba(169,179,197,0.95)"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          portal
        </text>
        <text
          x={cx}
          y={cy + 18}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={18}
          fill="rgba(233,238,247,0.95)"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
        >
          Círculo das Quintas
        </text>
      </svg>
    </div>
  );
}

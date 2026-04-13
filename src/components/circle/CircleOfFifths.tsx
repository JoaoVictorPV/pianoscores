"use client";

import * as React from "react";

import { cn } from "@/lib/cn";
import { MVP_KEYS, type KeySlug } from "@/content/keys";
import { useProgressStore } from "@/store/progressStore";
import { Button } from "@/components/ui/Button";

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
  const [mode, setMode] = React.useState<"major" | "minor">("major");
  const [spelling, setSpelling] = React.useState<"sharp" | "flat">("sharp");
  const [hovered, setHovered] = React.useState<KeyId | null>(null);
  const size = 520;
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = 220;
  const rInner = 150;

  const { progress, hydrated, hydrate } = useProgressStore();

  React.useEffect(() => {
    if (!hydrated) hydrate();
  }, [hydrated, hydrate]);

  // MVP mapping. Full mapping will be expanded later.
  const keyToSlug: Partial<Record<string, KeySlug>> = {
    "major:sharp:C": "c-major",
    "major:sharp:G": "g-major",
    "major:sharp:D": "d-major",
    "minor:sharp:A": "a-minor",

    // also allow picking A minor even if user is in "flat" mode.
    "minor:flat:A": "a-minor",
  };

  function slugFor(id: KeyId) {
    const key = `${mode}:${spelling}:${id}`;
    return keyToSlug[key];
  }

  function pctForKey(id: KeyId) {
    const slug = slugFor(id);
    if (!slug) return 0;
    const content = MVP_KEYS.find((k) => k.slug === slug);
    if (!content) return 0;
    const k = progress.keys[slug];
    const total = content.mechanical.exercises.length + content.repertoire.items.length;
    const done = k.exercisesDone.length + k.repertoireDone.length;
    return total === 0 ? 0 : Math.round((done / total) * 100);
  }

  function labelForKey(id: KeyId) {
    const slug = slugFor(id);
    if (!slug) return `${id} (${mode === "major" ? "Maior" : "menor"}) (em breve)`;
    const c = MVP_KEYS.find((k) => k.slug === slug);
    return c ? `${c.label}` : `${id}`;
  }

  function fillFor(id: KeyId) {
    const pct = pctForKey(id);
    const base = 0.03;
    const glow = 0.26;
    const alpha = base + (pct / 100) * glow;
    return `rgba(20,199,255,${alpha.toFixed(3)})`;
  }

  const hoveredSlug = hovered ? slugFor(hovered) : undefined;
  const hoveredPct = hovered ? pctForKey(hovered) : 0;

  return (
    <div className={cn("flex w-full flex-col items-center justify-center gap-4", className)}>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className="inline-flex overflow-hidden rounded-xl border border-[var(--color-border)] bg-[rgba(0,0,0,0.12)]">
          <Button
            type="button"
            size="sm"
            variant="segmented"
            className={cn("rounded-none border-0", mode === "major" ? "bg-[var(--color-neon-500)] text-black" : "")}
            onClick={() => setMode("major")}
          >
            Maiores
          </Button>
          <Button
            type="button"
            size="sm"
            variant="segmented"
            className={cn("rounded-none border-0", mode === "minor" ? "bg-[var(--color-neon-500)] text-black" : "")}
            onClick={() => setMode("minor")}
          >
            Menores
          </Button>
        </div>

        <div className="inline-flex overflow-hidden rounded-xl border border-[var(--color-border)] bg-[rgba(0,0,0,0.12)]">
          <Button
            type="button"
            size="sm"
            variant="segmented"
            className={cn("rounded-none border-0", spelling === "sharp" ? "bg-[var(--color-neon-500)] text-black" : "")}
            onClick={() => setSpelling("sharp")}
          >
            ♯
          </Button>
          <Button
            type="button"
            size="sm"
            variant="segmented"
            className={cn("rounded-none border-0", spelling === "flat" ? "bg-[var(--color-neon-500)] text-black" : "")}
            onClick={() => setSpelling("flat")}
          >
            ♭
          </Button>
        </div>
      </div>

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

          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.55 0
              "
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
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

          const fill = fillFor(k.id);

          const midAngle = (startAngle + endAngle) / 2;
          const labelPos = polarToCartesian(cx, cy, (rOuter + rInner) / 2, midAngle);
          const slug = slugFor(k.id);
          const isHovered = hovered === k.id;
          const scale = slug && isHovered ? 1.018 : 1;
          return (
            <g
              key={k.id}
              onMouseEnter={() => setHovered(k.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(k.id)}
              onBlur={() => setHovered(null)}
              style={{ transformOrigin: `${cx}px ${cy}px`, transform: `scale(${scale})` }}
              className={cn("transition-transform duration-200", slug ? "cursor-pointer" : "opacity-60")}
            >
              <path
                d={path}
                fill={fill}
                stroke="rgba(255,255,255,0.06)"
                className={cn(
                  "transition-[fill,stroke] duration-200",
                  slug
                    ? "hover:fill-[rgba(20,199,255,0.28)] hover:stroke-[rgba(77,225,255,0.35)]"
                    : "",
                )}
                filter={slug && isHovered ? "url(#softGlow)" : undefined}
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

        <circle
          cx={cx}
          cy={cy}
          r={112}
          fill="rgba(14,17,27,0.92)"
          stroke="rgba(255,255,255,0.07)"
        />
        <text
          x={cx}
          y={cy - 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={14}
          fill="rgba(169,179,197,0.95)"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {hovered ? "selecionar" : "portal"}
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
          {hovered ? labelForKey(hovered) : "Círculo das Quintas"}
        </text>

        {hovered ? (
          <text
            x={cx}
            y={cy + 44}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={12}
            fill="rgba(169,179,197,0.95)"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {hoveredSlug ? `${hoveredPct}% completo` : "conteúdo em construção"}
          </text>
        ) : null}
      </svg>
    </div>
  );
}

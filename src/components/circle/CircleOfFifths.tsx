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
  const [hovered, setHovered] = React.useState<KeyId | null>(null);
  const [hoveredInner, setHoveredInner] = React.useState<number | null>(null);
  const size = 720;
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = 300;
  const rInner = 205;
  // Inner ring (relative minors) is intentionally thicker for readability on iPad.
  const rInner2Outer = 200;
  const rInner2Inner = 120;

  const { progress, hydrated, hydrate } = useProgressStore();

  React.useEffect(() => {
    if (!hydrated) hydrate();
  }, [hydrated, hydrate]);

  // MVP mapping. We'll evolve to cover all 24 keys later.
  const outerMajorToSlug: Partial<Record<KeyId, KeySlug>> = {
    C: "c-major",
    G: "g-major",
    D: "d-major",
    A: "a-major",
    E: "e-major",
    B: "b-major",
    "F#": "fsharp-major",
    "C#": "csharp-major",
    Ab: "ab-major",
    Eb: "eb-major",
    Bb: "bb-major",
    F: "f-major",
  };

  // Inner ring uses *relative minors* aligned with outer major sectors.
  // C major <-> A minor, G major <-> E minor, D major <-> B minor, ...
  // Labels are shown for all, but only some are clickable (MVP).
  const INNER_RELATIVE_MINORS: { label: string; slug?: KeySlug }[] = [
    { label: "Am", slug: "a-minor" },
    { label: "Em", slug: "e-minor" },
    { label: "Bm", slug: "b-minor" },
    { label: "F♯m", slug: "fsharp-minor" },
    { label: "C♯m", slug: "csharp-minor" },
    { label: "G♯m", slug: "gsharp-minor" },
    { label: "D♯m", slug: "dsharp-minor" },
    { label: "A♯m", slug: "asharp-minor" },
    { label: "Fm", slug: "f-minor" },
    { label: "Cm", slug: "c-minor" },
    { label: "Gm", slug: "g-minor" },
    { label: "Dm", slug: "d-minor" },
  ];

  function pctForSlug(slug?: KeySlug) {
    if (!slug) return 0;
    const content = MVP_KEYS.find((k) => k.slug === slug);
    if (!content) return 0;
    const k = progress.keys[slug];
    const total = content.mechanical.exercises.length + content.repertoire.items.length;
    const done = k.exercisesDone.length + k.repertoireDone.length;
    return total === 0 ? 0 : Math.round((done / total) * 100);
  }

  function labelForSlug(slug?: KeySlug, fallback?: string) {
    if (!slug) return fallback ?? "(em breve)";
    const c = MVP_KEYS.find((k) => k.slug === slug);
    return c ? c.label : fallback ?? slug;
  }

  function labelForOuter(id: KeyId) {
    const slug = outerMajorToSlug[id];
    return labelForSlug(slug, `${id} (em breve)`);
  }

  function fillForOuter(id: KeyId) {
    const pct = pctForSlug(outerMajorToSlug[id]);
    const base = 0.05;
    const glow = 0.42;
    const alpha = base + (pct / 100) * glow;
    // Outer ring: cyan/teal (modern + contrasts inner ring)
    return `rgba(20,199,255,${alpha.toFixed(3)})`;
  }

  function fillForInner(slug?: KeySlug) {
    const pct = pctForSlug(slug);
    const base = 0.05;
    const glow = 0.38;
    const alpha = base + (pct / 100) * glow;
    // Inner ring: violet/purple
    return `rgba(167,139,250,${alpha.toFixed(3)})`;
  }

  const hoveredSlug = hovered ? outerMajorToSlug[hovered] : undefined;
  const hoveredInnerSlug =
    hoveredInner === null ? undefined : INNER_RELATIVE_MINORS[hoveredInner]?.slug;
  const hoveredPct = hovered ? pctForSlug(hoveredSlug) : 0;
  const hoveredInnerPct = hoveredInner !== null ? pctForSlug(hoveredInnerSlug) : 0;

  return (
    <div className={cn("flex w-full flex-col items-center justify-center", className)}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-[78vmin] w-[78vmin] max-h-[860px] max-w-[860px] md:h-[86vmin] md:w-[86vmin]"
        role="img"
        aria-label="Círculo das Quintas"
      >
        <defs>
          <radialGradient id="ringGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(235,240,255,0.14)" />
            <stop offset="70%" stopColor="rgba(235,240,255,0.05)" />
            <stop offset="100%" stopColor="rgba(235,240,255,0.00)" />
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
          stroke="rgba(235,240,255,0.16)"
        />
        <circle
          cx={cx}
          cy={cy}
          r={rInner - 2}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
        />

        <circle
          cx={cx}
          cy={cy}
          r={rInner2Outer + 2}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
        />
        <circle
          cx={cx}
          cy={cy}
          r={rInner2Inner - 2}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
        />

        {KEYS.map((k, idx) => {
          const segAngle = 360 / KEYS.length;
          const startAngle = idx * segAngle;
          const endAngle = (idx + 1) * segAngle;

          const path = describeArc(cx, cy, rOuter, rInner, startAngle, endAngle);

          const fill = fillForOuter(k.id);

          const midAngle = (startAngle + endAngle) / 2;
          const labelPos = polarToCartesian(cx, cy, (rOuter + rInner) / 2, midAngle);
          const slug = outerMajorToSlug[k.id];
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
                    ? "hover:fill-[rgba(20,199,255,0.26)] hover:stroke-[rgba(77,225,255,0.34)]"
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

        {/* Inner relative minors ring */}
        {KEYS.map((k, idx) => {
          const segAngle = 360 / KEYS.length;
          const startAngle = idx * segAngle;
          const endAngle = (idx + 1) * segAngle;
          const path = describeArc(cx, cy, rInner2Outer, rInner2Inner, startAngle, endAngle);

          const inner = INNER_RELATIVE_MINORS[idx];
          const slug = inner?.slug;
          const fill = fillForInner(slug);

          const midAngle = (startAngle + endAngle) / 2;
          const labelPos = polarToCartesian(cx, cy, (rInner2Outer + rInner2Inner) / 2, midAngle);
          const isHovered = hoveredInner === idx;
          const scale = slug && isHovered ? 1.02 : 1;

          return (
            <g
              key={`inner-${k.id}`}
              onMouseEnter={() => setHoveredInner(idx)}
              onMouseLeave={() => setHoveredInner(null)}
              onFocus={() => setHoveredInner(idx)}
              onBlur={() => setHoveredInner(null)}
              style={{ transformOrigin: `${cx}px ${cy}px`, transform: `scale(${scale})` }}
              className={cn("transition-transform duration-200", slug ? "cursor-pointer" : "opacity-60")}
            >
              <path
                d={path}
                fill={fill}
                stroke="rgba(255,255,255,0.05)"
                className={cn(
                  "transition-[fill,stroke] duration-200",
                  slug
                    ? "hover:fill-[rgba(167,139,250,0.30)] hover:stroke-[rgba(216,180,254,0.34)]"
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
                fontSize={14}
                fill="rgba(233,238,247,0.78)"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {inner?.label ?? ""}
              </text>
            </g>
          );
        })}

        <circle cx={cx} cy={cy} r={122} fill="rgba(10,11,16,0.92)" stroke="rgba(255,255,255,0.07)" />
        <text
          x={cx}
          y={cy - 8}
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
          {hovered
            ? labelForSlug(hoveredSlug, labelForOuter(hovered))
            : hoveredInner !== null
              ? labelForSlug(hoveredInnerSlug, INNER_RELATIVE_MINORS[hoveredInner]?.label)
              : "Círculo das Quintas"}
        </text>

        {hovered || hoveredInner ? (
          <text
            x={cx}
            y={cy + 44}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={12}
            fill="rgba(169,179,197,0.95)"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {hoveredSlug
              ? `${hoveredPct}% completo`
              : hoveredInnerSlug
                ? `${hoveredInnerPct}% completo`
                : "conteúdo em construção"}
          </text>
        ) : null}
      </svg>
    </div>
  );
}

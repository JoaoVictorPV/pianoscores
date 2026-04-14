"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Accordion from "@radix-ui/react-accordion";
import { X } from "lucide-react";

import type { KeyContent } from "@/content/keys";
import { cn } from "@/lib/cn";
import { useProgressStore } from "@/store/progressStore";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getComposerBlurb } from "@/content/composers";
import { getRepertoireDeepDive } from "@/content/repertoireDeepDive";

function autoExerciseGoals(title: string) {
  const t = title.toLowerCase();
  if (t.includes("escala")) {
    return [
      "Uniformizar timbre e volume em todas as notas (inclusive nos cruzamentos).",
      "Treinar ‘polegar silencioso’: troca de posição sem clique nem degrau de dinâmica.",
      "Construir estabilidade rítmica: a escala vira frase (não ‘subir e descer’).",
    ];
  }
  if (t.includes("arpejo")) {
    return [
      "Transformar o arpejo em um gesto contínuo (um arco), evitando ‘escada de posições’.",
      "Treinar antecipação de rota do antebraço: o braço chega antes do dedo.",
      "Construir legato convincente (com ou sem pedal, dependendo do estilo).",
    ];
  }
  if (t.includes("hanon")) {
    return [
      "Igualdade de ataque (borda nítida) + relaxamento imediato (sem acumular tensão).",
      "Educar independência/coordenação de dedos sem ‘levantar garra’.",
      "Quebrar memória muscular automática (especialmente quando é transposição).",
    ];
  }
  if (t.includes("czerny")) {
    return [
      "Agilidade com contorno (jeu perlé): clareza primeiro, velocidade depois.",
      "Regularidade: repetir sem perder intenção musical.",
      "Sincronizar olho e mão (antecipação visual).",
    ];
  }
  if (t.includes("voicing") || t.includes("voz")) {
    return [
      "Separar camadas de volume na mesma mão (melodia canta; internas sustentam).",
      "Treinar ‘peso distribuído’ (som cheio) sem apertar as notas internas.",
    ];
  }
  if (t.includes("staccato")) {
    return [
      "Staccato elástico (quique), sem martelar nem travar o antebraço.",
      "Borda clara no ataque + soltura imediata (som curto, corpo disponível).",
    ];
  }
  if (t.includes("células rítmicas") || t.includes("células")) {
    return [
      "Diagnosticar pontos de ansiedade/embolação (ritmos alterados expõem falhas).",
      "Reprogramar coordenação para voltar ao ritmo normal com estrada lisa.",
    ];
  }
  if (t.includes("leitura")) {
    return [
      "Treinar fluxo (não parar) e reduzir ‘pânico de nota’.",
      "Forçar o olho a trabalhar à frente (mão acalma quando o olho chega cedo).",
    ];
  }
  return [
    "Consolidar controle fino (clareza, relaxamento e repetição consciente).",
    "Treinar estabilidade de gesto (o mesmo som em repetições iguais).",
  ];
}

function autoExerciseHowTo(title: string) {
  const t = title.toLowerCase();
  const base = [
    "Comece em andamento lento (onde você controla 100% do gesto) e só acelere quando estiver ‘liso’.",
    "Use 2 dinâmicas: p (lupa de controle) e mf (som cheio sem dureza).",
    "Faça sessões curtas (30–90s) com pausas: técnica boa não depende de ‘força na marra’.",
    "Meta de conforto: ombro baixo, punho estável (estável ≠ rígido), dedos perto da tecla.",
    "Se surgir dor/aguda: pare e ajuste. Dor é bug de mecânica, não medalha.",
  ];

  if (t.includes("escala") || t.includes("arpejo")) {
    return [
      "Mãos separadas primeiro (som e rota), depois mãos juntas (sincronização).",
      "Treine 3 articulações: legato, non-legato e staccato leve (mesma soltura em todas).",
      "Use metrônomo como ‘juiz’ do pulso — mas não sacrifique timbre por velocidade.",
      ...base,
    ];
  }

  if (t.includes("hanon") || t.includes("czerny")) {
    return [
      "Toque como se fosse música: frase, direção e som bonito (exercício feio ensina feiura).",
      "Se embolar, quebre em células de 2–4 notas e reconstrua.",
      "Grave 20–30s e ouça: o microfone denuncia irregularidade melhor que a sensação da mão.",
      ...base,
    ];
  }

  return base;
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
      <div
        className="h-full rounded-full bg-[var(--color-neon-500)]"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

function CheckItem({
  checked,
  label,
  onToggle,
}: {
  checked: boolean;
  label: string;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "flex w-full items-start gap-3 rounded-xl border px-3 py-2 text-left transition-colors",
        checked
          ? "border-[color-mix(in_oklab,var(--color-neon-500),transparent_65%)] bg-[color-mix(in_oklab,var(--color-neon-500),transparent_92%)]"
          : "border-[var(--color-border)] bg-[var(--color-panel-900)] hover:bg-[color-mix(in_oklab,var(--color-panel-900),white_6%)]",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border",
          checked
            ? "border-[var(--color-neon-500)] bg-[var(--color-neon-500)] text-black"
            : "border-[var(--color-border)] bg-transparent text-transparent",
        )}
      >
        ✓
      </span>
      <span className="text-sm leading-6 text-[var(--color-foreground)]">{label}</span>
    </button>
  );
}

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-900)] px-3 py-1.5 text-xs text-[var(--color-foreground)] hover:bg-[color-mix(in_oklab,var(--color-panel-900),white_6%)]"
    >
      {label}
      <span className="text-[var(--color-muted)]">↗</span>
    </a>
  );
}

export function KeyDrawer({
  open,
  onOpenChange,
  keyContent,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  keyContent: KeyContent;
}) {
  const { progress, hydrated, hydrate, toggleExercise, toggleRepertoire, concludeKeyIfEligible } =
    useProgressStore();

  React.useEffect(() => {
    if (!hydrated) hydrate();
  }, [hydrated, hydrate]);

  const k = progress.keys[keyContent.slug];
  const exerciseIds = keyContent.mechanical.exercises.map((e) => e.id);
  const minPiecesDone = 3;

  const totalChecklist = exerciseIds.length + keyContent.repertoire.items.length;
  const doneChecklist = (k?.exercisesDone.length ?? 0) + (k?.repertoireDone.length ?? 0);
  const pct = totalChecklist === 0 ? 0 : Math.round((doneChecklist / totalChecklist) * 100);

  const conclude = React.useCallback(() => {
    if (!k) return;
    concludeKeyIfEligible(keyContent.slug, { exerciseIds, minPiecesDone });
  }, [concludeKeyIfEligible, exerciseIds, k, keyContent.slug]);

  React.useEffect(() => {
    conclude();
  }, [conclude, k?.exercisesDone, k?.repertoireDone]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content
          className={cn(
            "fixed bottom-0 left-0 right-0 max-h-[86vh] rounded-t-3xl border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg-950),black_10%)] shadow-[var(--shadow-glow)]",
            "md:bottom-auto md:left-auto md:right-6 md:top-6 md:h-[calc(100vh-3rem)] md:w-[520px] md:max-h-none md:rounded-3xl",
          )}
        >
          <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] px-5 py-4">
            <div className="min-w-0">
              <Dialog.Title className="truncate text-lg font-semibold tracking-tight">
                {keyContent.label}
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-[var(--color-muted)]">
                {keyContent.motto}
              </Dialog.Description>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Badge>{pct}% completo</Badge>
                <Badge>{keyContent.estimatedReadingMinutes} min de leitura (estim.)</Badge>
                {k?.concludedAt ? <Badge>Concluída ✓</Badge> : <Badge>Meta: 3 obras</Badge>}
              </div>
              <div className="mt-3">
                <ProgressBar value={pct} />
              </div>
            </div>

            <Dialog.Close asChild>
              <Button variant="ghost" size="sm" aria-label="Fechar">
                <X className="h-5 w-5" />
              </Button>
            </Dialog.Close>
          </div>

          <ScrollArea.Root className="h-[calc(86vh-88px)] md:h-[calc(100vh-3rem-88px)]">
            <ScrollArea.Viewport className="h-full px-5 py-5">
              <Accordion.Root type="multiple" className="space-y-3" defaultValue={["mechanical", "repertoire"]}>
                {/* Mechanical */}
                <Accordion.Item value="mechanical" className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel-900)]">
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left">
                      <span className="text-sm font-semibold">A) {keyContent.mechanical.title}</span>
                      <span className="text-[var(--color-muted)]">▼</span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-4 pb-4">
                    <p className="text-sm leading-6 text-[var(--color-muted)]">
                      {keyContent.mechanical.intro}
                    </p>

                    <div className="mt-4 space-y-3">
                      {keyContent.mechanical.exercises.map((ex) => (
                        <div key={ex.id} className="rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-panel-900),white_4%)] p-4">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="text-sm font-semibold">{ex.title}</div>
                              {ex.subtitle ? (
                                <div className="text-xs text-[var(--color-muted)]">{ex.subtitle}</div>
                              ) : null}
                              {ex.exampleNotes ? (
                                <div className="mt-2 rounded-xl border border-[var(--color-border)] bg-[rgba(0,0,0,0.25)] px-3 py-2 font-mono text-xs text-[var(--color-foreground)]">
                                  {ex.exampleNotes}
                                </div>
                              ) : null}
                            </div>
                            <Badge className="shrink-0">exercício</Badge>
                          </div>

                          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--color-muted)]">
                            {ex.notes.map((n, i) => (
                              <li key={i}>{n}</li>
                            ))}
                          </ul>

                          <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[rgba(0,0,0,0.18)] p-4">
                            <div className="text-xs font-semibold text-[var(--color-foreground)]">Objetivo</div>
                            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--color-muted)]">
                              {autoExerciseGoals(ex.title).map((t) => (
                                <li key={t}>{t}</li>
                              ))}
                            </ul>

                            <div className="mt-4 text-xs font-semibold text-[var(--color-foreground)]">
                              Como praticar (protocolo)
                            </div>
                            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--color-muted)]">
                              {autoExerciseHowTo(ex.title).map((t) => (
                                <li key={t}>{t}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-4">
                            <CheckItem
                              checked={k?.exercisesDone.includes(ex.id) ?? false}
                              label="Marcar como feito"
                              onToggle={() => toggleExercise(keyContent.slug, ex.id)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                {/* Affect */}
                {/* (B) removed by design: focus on Context + Repertoire */}

                {/* Repertoire */}
                <Accordion.Item value="repertoire" className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel-900)]">
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left">
                      <span className="text-sm font-semibold">B) {keyContent.repertoire.title}</span>
                      <span className="text-[var(--color-muted)]">▼</span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-4 pb-4">
                    <p className="text-sm leading-6 text-[var(--color-muted)]">{keyContent.repertoire.intro}</p>

                    <div className="mt-4 space-y-3">
                      {keyContent.repertoire.items.map((item) => {
                        const done = k?.repertoireDone.includes(item.id) ?? false;
                        const deepDive = getRepertoireDeepDive(item);
                        return (
                          <div key={item.id} className="rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-panel-900),white_4%)] p-4">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <div>
                                <div className="text-sm font-semibold">{item.composer}</div>
                                <div className="text-sm text-[var(--color-foreground)]">{item.title}</div>
                                <div className="mt-1 text-xs text-[var(--color-muted)]">
                                  Nível: <span className="text-[var(--color-foreground)]">{item.level}</span> · Foco: {" "}
                                  <span className="text-[var(--color-foreground)]">{item.technicalFocus}</span>
                                </div>
                              </div>
                              <Badge className="shrink-0">obra</Badge>
                            </div>

                            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{item.notes}</p>

                            <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[rgba(0,0,0,0.18)] p-4">
                              <div className="text-xs font-semibold text-[var(--color-foreground)]">
                                Simpósio da obra (aprofundado)
                              </div>

                              <Accordion.Root type="multiple" className="mt-3 space-y-2">
                                <Accordion.Item value={`summary-${item.id}`} className="rounded-xl border border-[var(--color-border)]">
                                  <Accordion.Header>
                                    <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-3 py-2 text-left">
                                      <span className="text-xs font-semibold text-[var(--color-foreground)]">
                                        Resumo (o que esta obra te dá)
                                      </span>
                                      <span className="text-[var(--color-muted)]">▼</span>
                                    </Accordion.Trigger>
                                  </Accordion.Header>
                                  <Accordion.Content className="px-3 pb-3">
                                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--color-muted)]">
                                      {deepDive.summary.map((p, i) => (
                                        <li key={i}>{p}</li>
                                      ))}
                                    </ul>
                                  </Accordion.Content>
                                </Accordion.Item>

                                {deepDive.sections.map((sec) => (
                                  <Accordion.Item
                                    key={`${item.id}-${sec.title}`}
                                    value={`${item.id}-${sec.title}`}
                                    className="rounded-xl border border-[var(--color-border)]"
                                  >
                                    <Accordion.Header>
                                      <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-3 py-2 text-left">
                                        <span className="text-xs font-semibold text-[var(--color-foreground)]">
                                          {sec.title}
                                        </span>
                                        <span className="text-[var(--color-muted)]">▼</span>
                                      </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content className="px-3 pb-3">
                                      <div className="space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                                        {sec.paragraphs.map((p, i) => (
                                          <p key={i}>{p}</p>
                                        ))}
                                      </div>
                                    </Accordion.Content>
                                  </Accordion.Item>
                                ))}

                                {deepDive.takeaways?.length ? (
                                  <Accordion.Item value={`takeaways-${item.id}`} className="rounded-xl border border-[var(--color-border)]">
                                    <Accordion.Header>
                                      <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-3 py-2 text-left">
                                        <span className="text-xs font-semibold text-[var(--color-foreground)]">
                                          Takeaways (o que praticar/ouvir)
                                        </span>
                                        <span className="text-[var(--color-muted)]">▼</span>
                                      </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content className="px-3 pb-3">
                                      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--color-muted)]">
                                        {deepDive.takeaways.map((t) => (
                                          <li key={t}>{t}</li>
                                        ))}
                                      </ul>
                                    </Accordion.Content>
                                  </Accordion.Item>
                                ) : null}
                              </Accordion.Root>
                            </div>

                            <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[rgba(0,0,0,0.18)] p-4">
                              <div className="text-xs font-semibold text-[var(--color-foreground)]">
                                Contexto histórico/biográfico (rápido)
                              </div>
                              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                                {getComposerBlurb(item.composer)}
                              </p>
                            </div>

                            <div className="mt-3 flex flex-wrap gap-2">
                              {item.links.map((l) => (
                                <ExternalLink key={l.url} href={l.url} label={l.label} />
                              ))}
                            </div>

                            <div className="mt-4">
                              <CheckItem
                                checked={done}
                                label={done ? "Marcada como estudada" : "Marcar como estudada"}
                                onToggle={() => toggleRepertoire(keyContent.slug, item.id)}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" className="flex w-2.5 touch-none select-none p-0.5">
              <ScrollArea.Thumb className="relative flex-1 rounded-full bg-[rgba(255,255,255,0.16)]" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

import { weekKey } from "@/lib/week";
import type { UserProgress } from "@/lib/storage";

export function concludedWeeks(progress: UserProgress) {
  const weeks = new Set<string>();
  for (const k of Object.values(progress.keys)) {
    if (!k.concludedAt) continue;
    weeks.add(weekKey(new Date(k.concludedAt)));
  }
  return [...weeks].sort();
}

export function currentStreakWeeks(progress: UserProgress) {
  const weeks = concludedWeeks(progress);
  if (weeks.length === 0) return 0;

  // Calculate streak ending on the current week if possible.
  const today = new Date();
  const thisWeek = weekKey(today);
  const weekSet = new Set(weeks);

  // If user didn't conclude anything this week, streak is still based on last concluded week.
  // We'll start from the max week in the set.
  const start = weekSet.has(thisWeek) ? thisWeek : weeks[weeks.length - 1];

  let streak = 0;
  let cursor = start;

  while (weekSet.has(cursor)) {
    streak++;
    cursor = prevWeek(cursor);
  }

  return streak;
}

function prevWeek(w: string) {
  // w = YYYY-W##
  const [yearStr, wkStr] = w.split("-W");
  let y = Number(yearStr);
  let wk = Number(wkStr);
  wk -= 1;
  if (wk >= 1) return `${y}-W${String(wk).padStart(2, "0")}`;

  // go to last week of previous year
  y -= 1;
  const last = isoWeeksInYear(y);
  return `${y}-W${String(last).padStart(2, "0")}`;
}

function isoWeeksInYear(year: number) {
  // ISO week date: week 53 occurs if Jan 1 is Thursday (or leap year and Wednesday)
  const d = new Date(Date.UTC(year, 0, 1));
  const day = d.getUTCDay() || 7;
  const isLeap = new Date(Date.UTC(year, 1, 29)).getUTCDate() === 29;
  return day === 4 || (isLeap && day === 3) ? 53 : 52;
}

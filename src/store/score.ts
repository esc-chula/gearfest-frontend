import { persistentAtom } from "@nanostores/persistent";

const initialValue: Record<number, number> = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
};

const scores = persistentAtom("scores", initialValue, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addScores(values: Record<number, number>, multiplier: number) {
  const updatedScores = scores.get();
  for (const key in values) {
    updatedScores[key] += values[key] * multiplier;
  }
  scores.set(updatedScores);
}

export default scores;

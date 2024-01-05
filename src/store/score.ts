import { persistentAtom } from "@nanostores/persistent";

const initialValue = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

const scores = persistentAtom("scores", initialValue, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addScores(values) {
  console.log(scores.get());
  const updatedScores = scores.get();
  Object.keys(updatedScores).forEach((key, index) => {
    updatedScores[key] += values[index];
  });
  scores.set(updatedScores);
}

export default scores;

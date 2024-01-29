import { addScores } from "../../store/score.ts";
import Button from "./Button";

interface Props {
  text: string;
  scores: number[];
  multiplier?: number;
}

const ScoredButton = ({ text, scores, multiplier }: Props): JSX.Element => {
  const handleClick = () => {
    addScores(scores, multiplier ?? 1);
  };

  return <Button text={text} handleClick={handleClick} />;
};

export default ScoredButton;

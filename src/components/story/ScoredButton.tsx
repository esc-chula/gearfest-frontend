import { addScores } from "../../store/score.ts";
import Button from "./Button";

interface Props {
  text: string;
  scores: number[];
}

const ScoredButton = ({ text, scores }: Props): JSX.Element => {
  const handleClick = () => {
    addScores(scores);
  };

  return <Button text={text} handleClick={handleClick} />;
};

export default ScoredButton;

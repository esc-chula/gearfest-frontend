import { addScores } from "../../store/score.ts";

interface Props {
  text: string;
  scoreArray: Array<number>;
  redirect: string;
}

const ButtonScore = ({ text, scoreArray, redirect }: Props) => {
  const handleClick = () => {
    addScores(scoreArray);
    location.href = redirect;
  };

  return (
    <button
      className="font-normal text-xs text-white flex h-fit w-full flex-wrap items-center justify-center bg-mutedpurple rounded-xl px-4 py-3.5 text-center"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonScore;

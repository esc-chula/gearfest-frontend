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
      className="flex h-fit w-full flex-wrap items-center justify-center whitespace-pre-line rounded-xl bg-mutedpurple px-4 py-3.5 text-center text-xs font-normal text-white"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonScore;

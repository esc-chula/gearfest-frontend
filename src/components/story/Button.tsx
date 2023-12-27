import { addScores } from '../../store/score.ts';

interface Props {
  text: string;
  scoreArray: Array<number>;
  redirect: string;
}

const Button = ({ text, scoreArray, redirect}: Props) => {
  const handleClick = () => {
    // TODO: implement logic of incrementing scores
    // After that, go to the next page
    addScores(scoreArray);
    location.href = redirect;
  };

  return (
    <button
      className="flex h-fit w-full flex-wrap items-center justify-center gap-2 rounded-2xl border-2 border-red-800 px-4 py-2 text-center text-2xl shadow-md shadow-red-800 hover:translate-y-1 active:translate-y-0"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;

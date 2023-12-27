import scores from '../../store/score.ts';
const score = scores.get()
const Score = () => {
  return (
    <div className="flex items-center justify-center gap-2 text-center text-3xl font-bold">
      <p>{score[1]}</p>
      <p>{score[2]}</p>
      <p>{score[3]}</p>
      <p>{score[4]}</p>
      <p>{score[5]}</p>
      <p>{score[6]}</p>
      <button
        onClick={() => {
          localStorage.clear(); // Temporary logic to clear local storage just for testing
        }}
        className="flex h-fit w-fit items-center justify-center rounded-2xl p-4 text-center text-2xl"
      >
        <i className="icon-[mdi--trash]"></i>
      </button>
    </div>
  );
};

export default Score;

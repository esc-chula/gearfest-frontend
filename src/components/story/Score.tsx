import scores from "../../store/score.ts";
const score = scores.get();

const Score = () => {
  return (
    <div className="flex items-center justify-center gap-2 text-center text-3xl font-bold">
      <p id="sangria">{score[0]}</p>
      <p id="cosmopolitan">{score[1]}</p>
      <p id="pinacolada">{score[2]}</p>
      <p id="ginandtonic">{score[3]}</p>
      <p id="bluelagoon">{score[4]}</p>
      <p id="lavenderlemonade">{score[5]}</p>
    </div>
  );
};

export default Score;

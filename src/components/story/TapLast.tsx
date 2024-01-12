import scores from "../../store/score.ts";
const score = scores.get();
const url = {
  0: "../cocktail/sangria",
  1: "../cocktail/cosmopolitan",
  2: "../cocktail/pinacolada",
  3: "../cocktail/ginandtonic",
  4: "../cocktail/bluelagoon",
  5: "../cocktail/lavenderlemonade",
};

const TapLast = () => {
  const handleEvents = () => {
    console.log(score);
    let maxKey: string;
    const scoreMap: { [key: string]: number } = score;
    const maxScore = Math.max(...Object.values(scoreMap));
    Object.keys(scoreMap).forEach((key) => {
      if (scoreMap[key] === maxScore) {
        maxKey = key;
      }
    });
    location.href = url[maxKey];
  };

  return (
    <div
      className="absolute my-auto h-full w-full opacity-50 hover:cursor-pointer"
      onClick={handleEvents}
    >
      <p className="absolute bottom-72 right-8 text-center font-medium">
        Tap to
        <br />
        continue
      </p>
    </div>
  );
};

export default TapLast;

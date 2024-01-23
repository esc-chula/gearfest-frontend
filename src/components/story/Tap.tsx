import scores from "../../store/score.ts";
const score = scores.get();
interface Props {
  redirect?: string;
  scored?: boolean;
}

const Tap = ({ redirect, scored }: Props) => {
  if (scored) {
    const url = {
      0: "../cocktail/sangria",
      1: "../cocktail/cosmopolitan",
      2: "../cocktail/pinacolada",
      3: "../cocktail/ginandtonic",
      4: "../cocktail/bluelagoon",
      5: "../cocktail/lavenderlemonade",
    };
    const scoreMap: { [key: string]: number } = score;
    const fullscore = [16, 15, 16, 15, 17, 13];
    const product: number[] = [];
    for (let i = 0; i < fullscore.length; i++) {
      product.push(scoreMap[i] / fullscore[i]);
    }
    const maxScore = Math.max(...product);
    const maxKey = product.indexOf(maxScore);
    redirect = url[maxKey];
  }
  return (
    <a href={redirect} className="absolute my-auto h-full w-full opacity-50">
      <p className="absolute bottom-72 right-8 text-center font-medium">
        Tap to
        <br />
        continue
      </p>
    </a>
  );
};

export default Tap;

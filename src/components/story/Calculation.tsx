import { useStore } from "@nanostores/react";
import { useEffect } from "react";

import scores from "@/store/score";

const Calculation = () => {
  const $scores = useStore(scores);

  useEffect(() => {
    const url: Record<number, string> = {
      0: "/cocktail/sangria",
      1: "/cocktail/cosmopolitan",
      2: "/cocktail/pinacolada",
      3: "/cocktail/ginandtonic",
      4: "/cocktail/bluelagoon",
      5: "/cocktail/lavenderlemonade",
    };
    const scoreMap: { [key: string]: number } = $scores;
    const fullscore = [40, 52, 45.5, 49, 49.5, 42.5];
    const product: number[] = [];
    for (let i = 0; i < fullscore.length; i++) {
      product.push(scoreMap[i] / fullscore[i]);
    }
    const maxScore = Math.max(...product);
    const maxKey = product.indexOf(maxScore);
    if (window) window.location.href = url[maxKey];
  }, []);
};

export default Calculation;

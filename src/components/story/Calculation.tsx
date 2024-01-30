import scores from "@/store/score";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const Calculation = () => {
  const $scores = useStore(scores);
  const setCookie = useCookies(["cocktail"])[1];

  useEffect(() => {
    const url: Record<number, string> = {
      0: "sangria",
      1: "cosmopolitan",
      2: "pinacolada",
      3: "ginandtonic",
      4: "bluelagoon",
      5: "lavenderlemonade",
    };
    const scoreMap: { [key: string]: number } = $scores;
    const fullscore = [40, 52, 45.5, 49, 49.5, 42.5];
    const product: number[] = [];
    for (let i = 0; i < fullscore.length; i++) {
      product.push(scoreMap[i] / fullscore[i]);
    }
    const maxScore = Math.max(...product);
    const maxKey = product.indexOf(maxScore);
    setCookie("cocktail", url[maxKey].toString(), {
      path: "/",
    });
    if (window) window.location.href = "/cocktail/" + url[maxKey];
  }, []);
};

export default Calculation;

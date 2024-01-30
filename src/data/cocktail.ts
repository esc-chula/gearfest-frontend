import BlueLagoon from "@/assets/cocktail/BlueLagoon.png";
import Cosmopolitan from "@/assets/cocktail/Cosmopolitan.png";
import GinAndTonic from "@/assets/cocktail/Gin-and-Tonic.png";
import LavenderLemonade from "@/assets/cocktail/Lavender-Lemonade.png";
import PinaColada from "@/assets/cocktail/Pina-Colada.png";
import SummerBerrySangria from "@/assets/cocktail/Summer-Berry-Sangria.png";

export interface Cocktail {
  variant: "raspberry" | "cosmo" | "pina" | "gin" | "lagoon" | "lalemon";
}

export const BACKGROUND: Record<Cocktail["variant"], string> = {
  raspberry: "bg-raspberry",
  cosmo: "bg-cosmo",
  pina: "bg-pina",
  gin: "bg-gin",
  lagoon: "bg-lagoon",
  lalemon: "bg-lalemon",
};

export const BACKGROUND_BOX: Record<Cocktail["variant"], string> = {
  raspberry: "bg-raspberrybox",
  cosmo: "bg-cosmobox",
  pina: "bg-pinabox",
  gin: "bg-ginbox",
  lagoon: "bg-lagoonbox",
  lalemon: "bg-lalemonbox",
};

export const TEXT: Record<Cocktail["variant"], string> = {
  raspberry: "text-salmon",
  cosmo: "text-peach",
  pina: "text-pineapple",
  gin: "text-leaf",
  lagoon: "text-tropical",
  lalemon: "text-lavender",
};

export const NAME: Record<Cocktail["variant"], string> = {
  raspberry: "Summer Berry Sangria",
  cosmo: "Cosmopolitan",
  pina: "Pina Colada",
  gin: "Gin and Tonic",
  lagoon: "Blue Lagoon",
  lalemon: "Lavender Lemonade",
};

export const DOWNLOAD: Record<Cocktail["variant"], string> = {
  raspberry: SummerBerrySangria.src,
  cosmo: Cosmopolitan.src,
  pina: PinaColada.src,
  gin: GinAndTonic.src,
  lagoon: BlueLagoon.src,
  lalemon: LavenderLemonade.src,
};

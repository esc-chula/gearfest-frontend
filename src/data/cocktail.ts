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

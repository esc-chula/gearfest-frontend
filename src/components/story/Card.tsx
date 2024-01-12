import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  name: string;
  img: string;
  accent: "salmon" | "peach" | "pineapple" | "leaf" | "tropical" | "lavender";
  bg:
    | "raspberrybox"
    | "cosmobox"
    | "pinabox"
    | "ginbox"
    | "lagoonbox"
    | "lalemonbox";
  children: ReactNode;
}

const Card = ({ name, img, accent, bg, children }: Props) => {
  const background = {
    raspberrybox: "bg-raspberrybox",
    cosmobox: "bg-cosmobox",
    pinabox: "bg-pinabox",
    ginbox: "bg-ginbox",
    lagoonbox: "bg-lagoonbox",
    lalemonbox: "bg-lalemonbox",
  };

  const acc = {
    salmon: "text-salmon",
    peach: "text-peach",
    pineapple: "text-pineapple",
    leaf: "text-leaf",
    tropical: "text-tropical",
    lavender: "text-lavender",
  };

  return (
    <div
      className={twMerge(
        `border-1 mt-1 block h-[36rem] w-[22rem] items-center justify-center text-pretty
    rounded-2xl border-[#FFEEE8] px-2 py-2 text-center shadow-md z-10`,
        background[bg]
      )}
    >
      <div className="mx-auto h-[35rem] rounded-2xl border border-amber-50 px-3">
        <img src={img} className="mx-auto w-[7rem]"></img>
        <h1 className={twMerge(`pb-2 text-2xl font-bold`, acc[accent])}>
          {name}
        </h1>
        <div className="text-pretty pb-4 text-xs font-medium text-mutedbrown">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;

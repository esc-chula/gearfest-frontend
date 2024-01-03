import type { ReactNode } from "react";
import {twMerge} from "tailwind-merge"

interface Props {
  name: string;
  img: string;
  accent: "salmon" | "peach" | "pineapple" | "leaf" | "tropical" | "lavender";
  bg: "raspberrybox" | "cosmobox" | "pinabox" | "ginbox" | "lagoonbox" | "lalemonbox";
  children: ReactNode
}

const Card = ({ name, img, accent, bg, children }: Props) => {  
  const background = {
    "raspberrybox": "bg-raspberrybox",
    "cosmobox": "bg-cosmobox",
    "pinabox": "bg-pinabox",
    "ginbox": "bg-ginbox",
    "lagoonbox": "bg-lagoonbox",
    "lalemonbox": "bg-lalemonbox",
  }

  const acc = {
    "salmon": "text-salmon",
    "peach":"text-peach",
    "pineapple":"text-pineapple",
    "leaf":"text-leaf",
    "tropical":"text-tropical",
    "lavender":"text-lavender"
  }
  
  return (
    <div className={twMerge(`block w-[22rem] mt-1 justify-center items-center rounded-2xl border-1
    border-[#FFEEE8] text-center shadow-md text-pretty px-2 py-2`, background[bg]
    )}>
      <div className="mx-auto rounded-2xl border px-3 border-amber-50">
        <img src={img} className="w-[7rem] mx-auto"></img>
        <h1 className={twMerge(`font-bold text-2xl pb-2`,acc[accent]
         )}>
          {name}
        </h1>
        <div className="text-xs text-pretty text-mutedbrown font-medium whitespace-pre-line pb-4">{children}</div>
      </div>
    </div>
  );
};

export default Card;

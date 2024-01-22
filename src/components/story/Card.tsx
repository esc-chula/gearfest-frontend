import { useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

import { BACKGROUND_BOX, NAME, TEXT, type Cocktail } from "@/data/cocktail";

interface Props extends Cocktail {
  children: ReactNode;
  img: string;
}

const Card = ({ variant, children, img }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={cn(
        "border-1 z-10 mt-1 block h-[36rem] w-[22rem] max-w-full items-center justify-center text-pretty rounded-2xl border-[#FFEEE8] px-2 py-2 text-center shadow-md",
        BACKGROUND_BOX[variant]
      )}
    >
      <div className="mx-auto h-[35rem] rounded-2xl border border-amber-50 px-3">
        <img src={img} className="mx-auto w-[7rem]" />
        <h1 className={cn(`pb-2 text-2xl font-bold`, TEXT[variant])}>
          {NAME[variant]}
        </h1>
        <div className="text-pretty pb-4 text-xs font-medium text-mutedbrown">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;

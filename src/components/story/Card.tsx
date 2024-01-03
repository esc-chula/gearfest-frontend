import type { ReactNode } from "react";

interface Props {
  name: string;
  img: string;
  accent: string;
  background: string;
  children: ReactNode
}

const Card = ({ name, img, accent, background, children }: Props) => {
  const divClass = `block w-4/5 mt-[2%] justify-center items-center rounded-2xl border-1
  border-[#FFEEE8] text-center shadow-md bg-${background} text-pretty px-2 py-2`
  const headerClass = `font-bold text-2xl text-${accent} pb-2`
  return (
    <div className={divClass}>
      <div className="mx-auto rounded-2xl border px-3 border-amber-50">
        <img src={img} className="w-[50%] mx-auto my-[-16px]"></img>
        <h1 className={headerClass}>{name}</h1>
        <div className="text-xs text-pretty text-mutedbrown font-medium whitespace-pre-line">{children}</div>
      </div>
    </div>
  );
};

export default Card;

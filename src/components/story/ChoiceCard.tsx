import type { ReactNode } from "react";

interface Props {
    header: string;
    children: ReactNode;
  }
  
  const ChoiceCard = ({ header, children }: Props) => {
  
    return (
      <div
        className="flex flex-wrap h-fit w-80 gap-2 mt-1 justify-center items-center rounded-2xl border-1
        border-mutedpurple border bg-white text-center shadow-md px-8 py-8 font-sans"
      >
        <p className="font-bold text-lg text-mutedpurple mb-4 whitespace-pre-line">{header}</p>
        {children}
      </div>
    );
  };
  
  export default ChoiceCard;
  
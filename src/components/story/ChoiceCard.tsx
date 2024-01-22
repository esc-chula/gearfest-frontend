import "@fontsource/mitr";
import type { ReactNode } from "react";

interface Props {
  header: string;
  children: ReactNode;
}

const ChoiceCard = ({ header, children }: Props) => {
  return (
    <div
      className="border-1 mt-1 flex h-fit w-80 flex-wrap items-center justify-center gap-2 rounded-2xl
        border border-mutedpurple bg-white px-8 py-8 text-center  shadow-md"
    >
      <p className="mb-4 whitespace-pre-line font-['mitr'] text-lg font-bold text-mutedpurple">
        {header}
      </p>
      {children}
    </div>
  );
};

export default ChoiceCard;

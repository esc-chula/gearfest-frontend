import type { ReactNode } from "react";

interface Props {
  header: string;
  children?: ReactNode;
}

const ChoiceCard = ({ header, children }: Props) => {
  return (
    <div className="flex h-fit w-72 max-w-full flex-wrap items-center justify-center gap-4 rounded-lg border border-mutedpurple bg-white px-4 py-8 text-center font-sans shadow-md">
      <p className="whitespace-pre-line text-xl text-mutedpurple">{header}</p>
      {children}
    </div>
  );
};

export default ChoiceCard;

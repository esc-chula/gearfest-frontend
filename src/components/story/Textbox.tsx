// src/components/story/Textbox.astro

import type { ReactNode } from "react";

interface Props {
  header: string;
}

const Textbox = ({ header }: Props) => {
  return (
    <div className="border-1 mt-1 flex flex-col h-80 w-80 items-start justify-start gap-2 rounded-2xl
      border border-mutedpurple bg-mutedpurple px-8 py-4 text-left font-sans shadow-md">
      <p className="mb-2 whitespace-pre-line text-lg font-bold text-white">
        {header}
      </p>
      <label htmlFor="userAnswer" className="text-white">
        เขียนคำตอบของคุณ....
      </label>
      <textarea
        id="userAnswer"
        className="border-none bg-mutedpurple rounded-md p-2 text-lg h-full w-full text-white" // Added 'text-white'
        onChange={(e) => console.log(`User's answer: ${e.target.value}`)}
      />
    </div>
  );
};

export default Textbox;

const Textbox = (): JSX.Element => {
  return (
    <textarea
      placeholder="เขียนคำตอบของคุณ...."
      className="h-48 w-full rounded-lg bg-mutedpurple p-2 text-sm text-white placeholder:text-white/80 focus:outline-none"
    />
  );
};

export default Textbox;

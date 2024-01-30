import { useCallback } from "react";
import { useCookies } from "react-cookie";

const Textbox = ({ id }: { id?: string }): JSX.Element => {
  const setCookie = useCookies([id || ""])[1];

  const save = useCallback((text: string) => {
    if (id)
      setCookie(id, text, {
        path: "/",
      });
  }, []);

  return (
    <textarea
      onChange={(e) => {
        save(e.target.value);
      }}
      required
      placeholder="เขียนคำตอบของคุณ...."
      className="h-48 w-full rounded-lg bg-mutedpurple p-2 text-sm text-white placeholder:text-white/80 focus:outline-none"
    />
  );
};

export default Textbox;

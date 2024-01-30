import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

interface Props {
  redirect: string;
}

const Tap = ({ redirect }: Props) => {
  const opacity = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    animate(opacity, 1, {
      duration: 1.5,
      delay: 2,
    });

    animate(y, 10, {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
    });
  }, []);

  return (
    <a
      href={redirect}
      className="absolute z-50 flex h-screen w-full text-center font-medium text-white/100"
    >
      <motion.p
        className="absolute bottom-1/4 right-8 z-50 rounded-full"
        style={{ opacity, y }}
      >
        Tap to
        <br />
        continue
      </motion.p>
    </a>
  );
};

export default Tap;

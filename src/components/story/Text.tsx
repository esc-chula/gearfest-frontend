import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

interface Props {
  text: string;
}

const Text = ({ text }: Props): JSX.Element => {
  const opacity = useMotionValue(0);

  useEffect(() => {
    animate(opacity, 1, {
      duration: 1.5,
      delay: 1.5,
    });
  }, []);

  return (
    <motion.p
      style={{ opacity }}
      className="z-10 m-auto px-24 text-center text-2xl text-white"
      dangerouslySetInnerHTML={{ __html: text }}
    ></motion.p>
  );
};

export default Text;

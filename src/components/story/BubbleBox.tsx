import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

import bg from "@/assets/images/BubbleBox.png";

interface Props {
  text: string;
}

const BubbleBox = ({ text }: Props): JSX.Element => {
  const opacity = useMotionValue(0);

  useEffect(() => {
    animate(opacity, 1, {
      duration: 1.5,
      delay: 1.5,
    });
  }, []);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center px-12 text-center font-bold"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "80%",
        height: "80%",
        opacity,
      }}
    >
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </motion.div>
  );
};

export default BubbleBox;

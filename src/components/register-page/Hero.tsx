import { navigate } from "astro:transitions/client";
import { useCallback, useMemo } from "react";
import { useCookies } from "react-cookie";

import parser from "@/utils/parser";

import BarImage from "@/assets/images/bar.webp";
import PageImage from "@/assets/images/Scene14.webp";

interface HeroProps {
  cocktail: string | undefined;
}

const Hero = ({ cocktail }: HeroProps): JSX.Element => {
  const cocktailInfo = useMemo(() => {
    return parser(cocktail);
  }, [cocktail]);

  const removeCookie = useCookies(["cocktail"])[2];

  const handleReset = useCallback(async () => {
    if (localStorage.getItem("scores")) localStorage.removeItem("scores");
    removeCookie("cocktail", { path: "/" });

    navigate("/story/scene1");
  }, []);

  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center space-y-12">
      <div className="relative flex aspect-square w-full overflow-hidden rounded-lg object-cover">
        <img
          src={cocktail ? PageImage.src : BarImage.src}
          alt="Bar Image"
          className="h-full w-full object-cover"
        />
        {cocktail && (
          <div
            className={`absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-y-2`}
          >
            <div>
              <img
                src={cocktailInfo.image}
                className="h-48 w-48 object-contain object-center"
                alt={cocktailInfo.name}
              />
            </div>
            <h3 className="text-center text-xl font-semibold text-white">
              {cocktailInfo.name}
            </h3>
          </div>
        )}
      </div>
      <button
        onClick={handleReset}
        className="flex h-fit w-full flex-wrap items-center justify-center gap-6 rounded-lg bg-gray px-4 py-2.5 text-center font-sukhumvit text-xl font-bold text-primary shadow-button outline-none"
      >
        {cocktail ? "ทำแบบทดสอบอีกครั้ง" : "เริ่มต้นการทำแบบทดสอบ"}
      </button>
    </div>
  );
};

export default Hero;

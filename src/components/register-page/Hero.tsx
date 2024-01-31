import { useCallback, useMemo } from "react";
import { useCookies } from "react-cookie";

import parser from "@/utils/parser";

import BarImage from "@/assets/images/bar.webp";
import PageImage from "@/assets/images/Scene14-low-res.webp";

interface HeroProps {
  accessToken: string | undefined;
  cocktail: string | undefined;
}

const Hero = ({ accessToken, cocktail }: HeroProps): JSX.Element => {
  const cocktailInfo = useMemo(() => {
    return parser(cocktail);
  }, [cocktail]);

  const removeCookie = useCookies(["cocktail"])[2];

  const handleReset = useCallback(async () => {
    localStorage.removeItem("scores");
    removeCookie("cocktail", { path: "/" });

    window.location.href = "/story/scene1";
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
      <div className="flex w-full flex-col space-y-4">
        {cocktail && (
          <button
            onClick={handleReset}
            type="button"
            className="flex h-fit w-full flex-wrap items-center justify-center gap-6 rounded-lg bg-gray px-4 py-2.5 text-center font-sukhumvit text-xl font-bold text-primary shadow-button outline-none"
          >
            ทำแบบทดสอบอีกครั้ง
          </button>
        )}

        {!cocktail && accessToken && (
          <a href="/story/scene1">
            <button
              type="button"
              className="flex h-fit w-full flex-wrap items-center justify-center gap-6 rounded-lg bg-gray px-4 py-2.5 text-center font-sukhumvit text-xl font-bold text-primary shadow-button outline-none"
            >
              เริ่มต้นการทำแบบทดสอบ
            </button>
          </a>
        )}

        {!cocktail && !accessToken && (
          <form action="/api/auth/signin" method="post" data-astro-reload>
            <button
              value="google"
              name="provider"
              type="submit"
              className="flex h-fit w-full flex-wrap items-center justify-center gap-2 rounded-lg bg-gray px-4 py-2.5 text-center font-sukhumvit text-xl font-bold text-primary shadow-button outline-none"
            >
              <i className="icon-[devicon--google] h-5 w-5"></i>Sign in with
              google
            </button>
          </form>
        )}

        {accessToken && (
          <a href="/api/auth/signout">
            <button
              type="button"
              className="mx-auto flex h-fit flex-wrap items-center justify-center rounded-lg bg-primary px-4 py-1.5 text-center font-sukhumvit font-bold text-gray shadow-button outline-none"
            >
              Sign out
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;

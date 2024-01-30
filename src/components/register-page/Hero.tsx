import BarImage from "@/assets/images/bar.jpg";
import PageImage from "@/assets/images/scene14.gif";
import { useCallback } from "react";
import { useCookies } from "react-cookie";

interface HeroProps {
  accessToken: string | undefined;
  cocktail: string | undefined;
}

const Hero = ({ accessToken, cocktail }: HeroProps): JSX.Element => {
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          {cocktail}
        </div>
      </div>
      <div className="w-full space-y-4">
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
              <i className="icon-[devicon--google] h-5 w-5"></i>Login with
              google
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Hero;

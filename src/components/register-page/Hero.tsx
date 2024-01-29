import BarImage from "@/assets/images/bar.jpg";

interface HeroProps {
  accessToken: string | undefined;
}

const Hero = ({ accessToken }: HeroProps): JSX.Element => {
  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center space-y-12">
      <div className="flex aspect-square w-full overflow-hidden rounded-lg object-cover">
        <img
          src={BarImage.src}
          alt="Bar Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full space-y-4">
        {accessToken && (
          <a href="/story/scene1">
            <button
              type="button"
              className="flex h-fit w-full flex-wrap items-center justify-center gap-6 rounded-lg bg-gray px-4 py-2.5 text-center font-sukhumvit text-xl font-bold text-primary shadow-button outline-none"
            >
              เริ่มต้นการทำแบบทดสอบ
            </button>
          </a>
        )}

        {!accessToken && (
          <form action="/api/auth/signin" method="get">
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

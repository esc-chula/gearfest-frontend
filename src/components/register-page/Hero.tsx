import BarImage from "@/assets/images/bar.jpg";

const Hero = (): JSX.Element => {
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
        <button className="flex h-fit w-full flex-wrap items-center justify-center gap-6 rounded-lg bg-gray px-4 py-2.5 text-center font-sukhumvit text-xl font-bold text-primary shadow-button">
          เริ่มต้นการทำแบบทดสอบ
        </button>

        <button className="flex h-fit w-full flex-wrap items-center justify-center gap-2 rounded-lg bg-gray px-4 py-2.5 text-center font-sukhumvit text-xl font-bold text-primary shadow-button">
          <i className="icon-[devicon--google] h-5 w-5"></i>Register with google
        </button>
      </div>
    </div>
  );
};

export default Hero;

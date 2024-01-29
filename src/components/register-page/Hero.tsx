import BarImage from "@/assets/images/bar.jpg";

const Hero = () => {
  const isDDay = new Date().getTime() > new Date("2024-02-03").getTime();

  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center space-y-12">
      <div className="flex aspect-square w-full overflow-hidden rounded-lg object-cover">
        <img
          src={BarImage.src}
          alt="Bar Image"
          className="h-full w-full object-cover"
        />
      </div>
      {isDDay ? (
        <div className="space-y-4">
          <button className="flex h-fit w-full flex-wrap items-center justify-center gap-6 rounded-lg bg-gray px-4 py-2.5 text-center text-xl font-semibold text-primary shadow-button">
            เริ่มต้นการทำแบบทดสอบ
          </button>

          <button className="flex h-fit w-full flex-wrap items-center justify-center gap-6 rounded-lg bg-gray px-4 py-2.5 text-center text-xl font-semibold text-primary shadow-button">
            ลงทะเบียนเข้างาน
          </button>
        </div>
      ) : (
        <form
          className="flex justify-center"
          method="POST"
          action="/api/auth/signin"
        >
          <button
            className="flex h-fit w-full flex-wrap items-center justify-center gap-6 rounded-lg bg-gray px-4 py-2.5 text-center text-xl font-semibold text-primary shadow-button"
            type="submit"
          >
            <i className="icon-[devicon--google] h-5 w-5"></i>Register with
            google
          </button>
        </form>
      )}
    </div>
  );
};

export default Hero;

// import BarImage from "";

interface Props {
  page: "register" | "start" | "redo";
  dDay: boolean;
}

const Hero = ({ page, dDay }: Props) => {
  return (
    <div className="w-full space-y-12">
      <div className="flex h-72 w-full items-end overflow-hidden rounded-lg bg-white">
        {/* <Image src={BarImage} alt="Bar Image" /> */}
        {page === "redo" ? "result" : "image"}
        {dDay == true ? "dDay" : "no dDay"}
      </div>
      <div>
        <button className="flex h-fit w-full flex-wrap items-center justify-center gap-6 rounded-lg bg-base px-4 py-2.5 text-center text-2xl font-semibold text-primary shadow-button">
          <i className="icon-[devicon--google] h-7 w-7"></i>
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default Hero;

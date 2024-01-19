// import BarImage from "@/assets/images/bar.png";
// import { Image } from "astro:assets";

interface Props {
  page: "register" | "start" | "redo";
  dDay: boolean;
}

const Hero = ({ page, dDay }: Props) => {
  return (
    <div className="w-full space-y-12">
      <div className="flex h-72 w-full items-end overflow-hidden rounded-lg bg-white">
        {/* <Image src={BarImage} alt="Bar Image" /> */}
        {page === "redo" ? "result" : "Image"}
      </div>
      <>
        {dDay ? (
          <div className={page === "redo" ? "flex space-x-2" : "space-y-4"}>
            <button
              className={`flex h-fit flex-wrap items-center justify-center gap-6 rounded-lg bg-base px-4 py-2.5 text-center text-2xl font-semibold text-primary shadow-button ${
                page === "redo" ? "" : "w-full"
              }`}
            >
              {page === "redo" ? "Redo" : "เริ่มต้นการทำแบบทดสอบ"}
            </button>

            <button className="flex h-fit w-full flex-wrap items-center justify-center gap-6 rounded-lg bg-base px-4 py-2.5 text-center text-2xl font-semibold text-primary shadow-button">
              {page === "redo" ? "ลงทะเบียนเข้างาน" : "ลงทะเบียนเข้าร่วมงาน"}
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              className={`flex h-fit flex-wrap items-center justify-center gap-6 rounded-lg bg-base px-4 py-2.5 text-center text-2xl font-semibold text-primary shadow-button ${
                page === "redo" ? "" : "w-full"
              }`}
            >
              {page === "register" ? (
                <>
                  <i className="icon-[devicon--google] h-7 w-7"></i>Register
                  with google
                </>
              ) : page === "start" ? (
                "เริ่มต้นการทำแบบทดสอบ"
              ) : (
                "Redo"
              )}
            </button>
          </div>
        )}
      </>
    </div>
  );
};

export default Hero;

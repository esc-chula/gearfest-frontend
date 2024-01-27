import BarImage from "@/assets/images/bar.png";
import { cn } from "@/lib/utils";

interface Props {
  page: "register" | "start" | "redo";
  dDay: boolean;
}

const Hero = ({ page, dDay }: Props) => {
  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center space-y-12">
      <div className="flex aspect-square w-full overflow-hidden rounded-lg object-cover">
        <img src={BarImage.src} alt="Bar Image" className="h-full w-full" />
      </div>
      {dDay ? (
        <div className={cn(page === "redo" ? "flex space-x-2" : "space-y-4")}>
          <button
            className={cn(
              "flex h-fit flex-wrap items-center justify-center gap-6 rounded-lg bg-base px-4 py-2.5 text-center text-xl font-semibold text-primary shadow-button",
              page === "redo" ? "" : "w-full"
            )}
          >
            {page === "redo" ? "Redo" : "เริ่มต้นการทำแบบทดสอบ"}
          </button>

          <button className="flex h-fit w-full flex-wrap items-center justify-center gap-6 rounded-lg bg-base px-4 py-2.5 text-center text-xl font-semibold text-primary shadow-button">
            ลงทะเบียนเข้างาน
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            className={cn(
              "flex h-fit flex-wrap items-center justify-center gap-6 rounded-lg bg-base px-4 py-2.5 text-center text-xl font-semibold text-primary shadow-button",
              page === "redo" ? "" : "w-full"
            )}
          >
            {page === "register" ? (
              <>
                <i className="icon-[devicon--google] h-7 w-7"></i>Register with
                google
              </>
            ) : page === "start" ? (
              "เริ่มต้นการทำแบบทดสอบ"
            ) : (
              "Redo"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Hero;

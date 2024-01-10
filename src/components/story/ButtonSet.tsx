import * as htmlToImage from "html-to-image";
import { twMerge } from "tailwind-merge";
interface Props {
  accent: "salmon" | "peach" | "pineapple" | "leaf" | "tropical" | "lavender";
  bg:
    | "raspberrybox"
    | "cosmobox"
    | "pinabox"
    | "ginbox"
    | "lagoonbox"
    | "lalemonbox";
  img: string;
  id: string;
}

const ButtonSet = ({ accent, bg, img, id }: Props) => {
  const background = {
    raspberrybox: "bg-raspberrybox",
    cosmobox: "bg-cosmobox",
    pinabox: "bg-pinabox",
    ginbox: "bg-ginbox",
    lagoonbox: "bg-lagoonbox",
    lalemonbox: "bg-lalemonbox",
  };

  const acc = {
    salmon: "text-salmon",
    peach: "text-peach",
    pineapple: "text-pineapple",
    leaf: "text-leaf",
    tropical: "text-tropical",
    lavender: "text-lavender",
  };

  const downloadImage = () => {
    document.getElementById("buttonSet").style.visibility = "hidden";
    htmlToImage
      .toJpeg(document.getElementById(id), { quality: 0.96 })
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.download = "result.jpeg";
        link.href = dataUrl;
        link.click();
        document.getElementById("buttonSet").style.visibility = "visible";
      });
  };

  const handleClick = () => {
    location.href = "../";
  };

  return (
    <div
      id="buttonSet"
      className="relative mx-auto my-auto mt-2 flex w-64 gap-4"
    >
      <button
        className={twMerge(
          `flex w-full flex-wrap items-center justify-center gap-4 rounded-3xl border border-rose-200 px-2 py-1.5
        text-center text-[1rem] font-semibold shadow-md`,
          background[bg],
          acc[accent]
        )}
        onClick={handleClick}
      >
        กลับสู่หน้าหลัก
      </button>
      <button
        className={twMerge(
          `flex w-full flex-wrap items-center justify-center gap-4 rounded-3xl border border-rose-200 px-2 py-1.5
        text-center text-[1rem] font-semibold shadow-md`,
          background[bg],
          acc[accent]
        )}
        onClick={downloadImage}
      >
        <img className="w-[20%]" src={img} />
        บันทึกรูป
      </button>
    </div>
  );
};

export default ButtonSet;

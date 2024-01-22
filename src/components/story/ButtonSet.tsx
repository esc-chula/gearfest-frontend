import { BACKGROUND_BOX, TEXT, type Cocktail } from "@/data/cocktail";
import { cn } from "@/lib/utils";
import * as htmlToImage from "html-to-image";
interface Props extends Cocktail {}

const ButtonSet = ({ variant }: Props): JSX.Element => {
  const downloadImage = () => {
    const result = document.getElementById("result");
    if (!result) return;
    htmlToImage.toJpeg(result, { quality: 0.96 }).then(function (dataUrl) {
      const link = document.createElement("a");
      link.download = "result.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div className="relative mx-auto mb-16 mt-2 flex w-64 gap-4" id="buttonset">
      <a
        href="/"
        className={cn(
          `flex w-full flex-wrap items-center justify-center gap-4 rounded-3xl border border-rose-200 px-2 py-1.5
        text-center font-semibold shadow-md`,
          BACKGROUND_BOX[variant],
          TEXT[variant]
        )}
      >
        กลับสู่หน้าหลัก
      </a>
      <button
        className={cn(
          `flex w-full flex-wrap items-center justify-center gap-2 rounded-3xl border border-rose-200 px-2 py-1.5
        text-center font-semibold shadow-md`,
          BACKGROUND_BOX[variant],
          TEXT[variant]
        )}
        onClick={downloadImage}
      >
        <i className="icon-[mdi--download]"></i>
        บันทึกรูป
      </button>
    </div>
  );
};

export default ButtonSet;

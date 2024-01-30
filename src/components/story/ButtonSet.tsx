import { BACKGROUND_BOX, DOWNLOAD, TEXT, type Cocktail } from "@/data/cocktail";
import { cn } from "@/lib/utils";

interface Props extends Cocktail {}

const ButtonSet = ({ variant }: Props): JSX.Element => {
  return (
    <div
      className="relative mx-auto mb-16 mt-2 flex w-72 gap-4 px-4"
      id="buttonset"
    >
      <div>
        <a
          href="/"
          className={cn(
            `flex w-full flex-wrap items-center justify-center gap-4 rounded-3xl border border-rose-200 px-3 py-1.5
        text-center font-semibold shadow-md outline-none`,
            BACKGROUND_BOX[variant],
            TEXT[variant]
          )}
        >
          กลับสู่หน้าหลัก
        </a>
      </div>
      <div>
        <a href={DOWNLOAD[variant]} download={true}>
          <button
            className={cn(
              `flex w-full flex-wrap items-center justify-center gap-2 rounded-3xl border border-rose-200 px-3 py-1.5
        text-center font-semibold shadow-md outline-none`,
              BACKGROUND_BOX[variant],
              TEXT[variant]
            )}
            type="button"
          >
            <i className="icon-[mdi--download]"></i>
            บันทึกรูป
          </button>
        </a>
      </div>
    </div>
  );
};

export default ButtonSet;

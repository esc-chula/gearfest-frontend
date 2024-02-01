import { BACKGROUND_BOX, DOWNLOAD, TEXT, type Cocktail } from "@/data/cocktail";
import { cn } from "@/lib/utils";

interface Props extends Cocktail {}

const ButtonSet = ({ variant }: Props): JSX.Element => {
  return (
    <div className="z-20 mx-auto mb-12 mt-2 space-y-4 px-4">
      <div
        className="relative flex w-full flex-wrap justify-center gap-4"
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
        <div>
          <a href="/donate">
            <button
              className={cn(
                `flex w-full flex-wrap items-center justify-center gap-2 rounded-3xl border border-rose-200 px-3 py-1.5
      text-center font-semibold shadow-md outline-none`,
                BACKGROUND_BOX[variant],
                TEXT[variant]
              )}
              type="button"
            >
              Donate Here !
            </button>
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-white">
        **รายได้จากการบริจาคหลังหักค่าใช้จ่ายจะนำไปบริจาคให้น้อง ๆ
        ในโรงเรียนที่จังหวัดพระนครศรีอยุธยา
      </div>
    </div>
  );
};

export default ButtonSet;

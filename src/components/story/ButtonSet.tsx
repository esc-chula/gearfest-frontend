import {twMerge} from "tailwind-merge"
interface Props {
  accent: "salmon" | "peach" | "pineapple" | "leaf" | "tropical" | "lavender";
  bg: "raspberrybox" | "cosmobox" | "pinabox" | "ginbox" | "lagoonbox" | "lalemonbox";
  img: string;
}

const ButtonSet = ({accent, bg, img}: Props) => {

  const background = {
    "raspberrybox": "bg-raspberrybox",
    "cosmobox": "bg-cosmobox",
    "pinabox": "bg-pinabox",
    "ginbox": "bg-ginbox",
    "lagoonbox": "bg-lagoonbox",
    "lalemonbox": "bg-lalemonbox",
  }

  const acc = {
    "salmon": "text-salmon",
    "peach":"text-peach",
    "pineapple":"text-pineapple",
    "leaf":"text-leaf",
    "tropical":"text-tropical",
    "lavender":"text-lavender"
  }
  const handleClick = () => {
    // TODO: implement logic of image saving
  };

  return (
    <div className="flex w-[16rem] relative mx-auto my-auto gap-4 mt-2">
        <button
        className={twMerge(`flex w-full flex-wrap items-center justify-center gap-4 rounded-3xl border border-rose-200 px-2 py-1.5
        text-center shadow-md text-[1rem] font-semibold`,background[bg],acc[accent])}
        onClick={handleClick}
        >
            กลับสู่หน้าหลัก
        </button>
        <button
        className={twMerge(`flex w-full flex-wrap items-center justify-center gap-4 rounded-3xl border border-rose-200 px-2 py-1.5
        text-center shadow-md text-[1rem] font-semibold`,background[bg],acc[accent])}
        onClick={handleClick}
        >
            <img className="w-[20%]" src={img}/>บันทึกรูป
        </button>
    </div>
  );
};

export default ButtonSet;

interface Props {
  accent: string;
  border: string;
  bg: string;
}

const ButtonSet = ({accent, border, bg}: Props) => {
  const handleClick = () => {
    // TODO: implement logic of image saving
  };
  const buttonClass = `flex w-full flex-wrap items-center justify-center gap-4 rounded-3xl border border-${border}-200 px-2 py-1.5
  text-center shadow-md text-[1rem] text-${accent} bg-${bg} font-semibold`

  return (
    <div className="flex w-[65%] relative mx-auto my-auto gap-4 mt-2">
        <button
        className={buttonClass}
        onClick={handleClick}
        >
            กลับสู่หน้าหลัก
        </button>
        <button
        className={buttonClass}
        onClick={handleClick}
        >
            <img className="w-[20%]" src="/images/elements/BsBoxArrowInDown.svg"/>บันทึกรูป
        </button>
    </div>
  );
};

export default ButtonSet;

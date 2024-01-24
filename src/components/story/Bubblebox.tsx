import Box from "@/assets/images/Bubblebox.png";

interface Props {
  endText: string;
}

const Bubblebox = ({ endText }: Props) => {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 scale-[250%] text-base">
        <img src={Box.src} alt="Bubblebox" />
      </div>
      <p className="absolute left-1/2 top-1/2 z-[60] -translate-x-1/2 -translate-y-1/2 text-lg">
        {endText}
      </p>
    </>
  );
};

export default Bubblebox;

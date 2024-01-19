import Cake1 from "@/assets/elements/cake-1.png";
import Calendar from "@/assets/elements/calendar.png";
import Donut from "@/assets/elements/donut.png";
import Drinks from "@/assets/elements/drinks.png";
import Heart1 from "@/assets/elements/heart-1.png";
import Letter from "@/assets/elements/letter.png";
import Orange from "@/assets/elements/orange.png";
import Palette from "@/assets/elements/palette.png";
import Strawberry from "@/assets/elements/strawberry.png";

const FooterDecorator = () => {
  return (
    <div className="absolute inset-x-0 -left-[1.25rem] bottom-32 opacity-80">
      <img
        className="absolute left-0 top-[48px] h-32 w-[152px]"
        src={Calendar.src}
      />
      <img
        className="absolute left-[471.56px] top-[8.91px] h-[166.91px] w-[140.50px] origin-top-left rotate-[62.88deg]"
        src={Palette.src}
      />
      <img
        className="absolute left-[193px] top-0 h-[90px] w-24"
        src={Heart1.src}
      />
      <img
        className="absolute left-[226.20px] top-[15px] h-[105.82px] w-[109.92px] origin-top-left rotate-[1.19deg]"
        src={Orange.src}
      />
      <img
        className="absolute left-[142px] top-[45px] h-[104px] w-[118px]"
        src={Donut.src}
      />
      <img
        className="absolute left-[117px] top-[45px] h-[121px] w-[70px]"
        src={Drinks.src}
      />
      <img
        className="absolute left-[226px] top-[67.43px] h-[115.51px] w-[129.02px] origin-top-left rotate-[-17.79deg]"
        src={Letter.src}
      />
      <img
        className="absolute left-[207px] top-[69px] h-[88px] w-[88px]"
        src={Strawberry.src}
      />
      <img
        className="absolute left-[315px] top-[71px] h-[82px] w-[84px]"
        src={Cake1.src}
      />
    </div>
  );
};

export default FooterDecorator;

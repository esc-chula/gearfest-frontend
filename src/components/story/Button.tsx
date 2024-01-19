interface Props {
  text: string;
  handleClick?: () => void;
}

const Button = ({ text, handleClick }: Props) => {
  return (
    <button
      className="flex h-fit w-full flex-wrap items-center justify-center rounded-xl bg-mutedpurple px-4 py-3.5 text-center text-xs font-normal text-white"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;

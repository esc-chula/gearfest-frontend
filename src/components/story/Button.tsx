interface Props {
  text: string;
  handleClick?: () => void;
}

const Button = ({ text, handleClick }: Props) => {
  return (
    <button
      className="font-sukhumvit flex h-fit w-full flex-wrap items-center justify-center rounded-xl bg-mutedpurple p-4 text-center text-base text-white"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;

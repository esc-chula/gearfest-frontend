interface Props {
  text: string;
  redirect: string;
}

const Button = ({ text, redirect }: Props) => {
  const handleClick = () => {
    location.href = redirect;
  };

  return (
    <button
      className="font-normal text-xs text-white flex h-fit w-full flex-wrap items-center justify-center bg-mutedpurple rounded-xl px-4 py-3.5 text-center"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;

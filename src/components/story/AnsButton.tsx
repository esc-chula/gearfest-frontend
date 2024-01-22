interface Props {
  text: string;
  page: string;
}

const Button = ({ text, page }: Props) => {
  // const handleClick = () => {
  //   // TODO: implement logic of incrementing scores
  //   // After that, go to the next page
  //   Astro.redirect({ page });
  // };

  return (
    <a href={page}>
      <button className="bg-vio-100 shadow-vio-100 flex h-fit w-full flex-wrap items-center justify-center gap-2 rounded-2xl border-2 px-4 py-2 text-center text-lg text-white shadow-md hover:translate-y-1 active:translate-y-0">
        {text}
      </button>
    </a>
  );
};

export default Button;

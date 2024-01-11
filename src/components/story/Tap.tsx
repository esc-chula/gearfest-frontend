interface Props {
  redirect: string;
}

const Tap = ({ redirect }: Props) => {
  const handleEvents = () => {
    location.href = redirect;
  };

  return (
    <div
      className="absolute my-auto h-full w-full opacity-50 hover:cursor-pointer"
      onTouchEnd={handleEvents}
    >
      <p className="absolute bottom-72 right-8 text-center font-medium">
        Tap to
        <br />
        continue
      </p>
    </div>
  );
};

export default Tap;

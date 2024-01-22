interface Props {
  redirect: string;
}

const Tap = ({ redirect }: Props) => {
  return (
    <a href={redirect} className="absolute my-auto h-full w-full opacity-50">
      <p className="absolute bottom-72 right-8 text-center font-medium">
        Tap to
        <br />
        continue
      </p>
    </a>
  );
};

export default Tap;

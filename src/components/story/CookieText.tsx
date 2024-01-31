import { useCookies } from "react-cookie";

interface Props {
  cookiePath: string;
}

const CookieText = ({ cookiePath }: Props) => {
  const [cookies] = useCookies([cookiePath]);

  return <>{cookies[cookiePath]}</>;
};

export default CookieText;

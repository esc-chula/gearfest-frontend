import { Howl } from "howler";
import { useEffect, useMemo, useState } from "react";

const sound = new Howl({
  src: ["/music/night-jazz.mp3"],
  loop: true,
  volume: 0.5,
  autoplay: false,
  html5: true,
  onplayerror: function () {
    sound.once("unlock", function () {
      sound.play();
    });
  },
});
const BGM = (): JSX.Element => {
  const playing = useMemo(() => {
    return sound?.playing();
  }, [sound]);
  const [isPlaying, setPlaying] = useState(playing);

  useEffect(() => {
    setPlaying(playing);
  }, [playing]);

  useEffect(() => {
    if (isPlaying) {
      if (window.location.pathname === "/") sound.stop();
    } else {
      if (window.location.pathname.startsWith("/story")) sound.play();
    }
  }, [isPlaying]);

  return <></>;
};

export default BGM;

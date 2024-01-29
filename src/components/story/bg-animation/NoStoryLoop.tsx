import Bubblebox from "@/components/story/BubbleBox";
import Tap from "@/components/story/Tap";
import type { ImageMetadata } from "astro";
import { useEffect, useState } from "react";

interface Props {
  scene: ImageMetadata[];
  endText: string;
  redirect: string;
}

const NoStoryLoop = ({ scene, endText, redirect }: Props) => {
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSceneIndex((prev) => {
        if (prev === scene.length - 1) return scene.length - 1;
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <img
        className="absolute h-full w-full object-cover"
        src={scene[sceneIndex].src}
      />
      {sceneIndex === scene.length - 1 && (
        <>
          <Bubblebox text={endText} />
          <Tap redirect={redirect} />
        </>
      )}
    </>
  );
};

export default NoStoryLoop;

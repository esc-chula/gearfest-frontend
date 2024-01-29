import Bubblebox from "@/components/story/Bubblebox.tsx";
import Tap from "@/components/story/Tap.tsx";
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
      {sceneIndex === scene.length - 1 ? (
        <>
          <Tap redirect={redirect} />
          <Bubblebox endText={endText} />
        </>
      ) : null}
      <div className="h-screen w-full">
        <img className="h-screen w-full" src={scene[sceneIndex].src} />
      </div>
    </>
  );
};

export default NoStoryLoop;

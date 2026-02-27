"use client";

import { Video, PrevRefButton, NextRefButton } from "../main-page";
import "../other-style.css";

function CurrentContent() {
  return <Video src="/once-again/intro.mp4" width={1000} />;
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <CurrentContent />

        <div className="flex justify-between w-full mt-10">
          <PrevRefButton href="intro" />
          <NextRefButton href="2" />
        </div>
      </div>
    </>
  );
}

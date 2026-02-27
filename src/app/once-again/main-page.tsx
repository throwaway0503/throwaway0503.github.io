"use client";

import "./main-style.css";
import "../globals.css";
import { useState } from "react";
import { useEffect } from "react";

export const BASE_PATH = "/once-again/";

// Title component

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return <div className="title">{title}</div>;
}

// Dividing line component

export function Divider() {
  return (
    <div className="divider-container">
      <div className="divider" />
    </div>
  );
}

// Ref Button components

interface RefButtonProps {
  href?: string;
}

export function PrevRefButton({ href }: RefButtonProps) {
  if (!href) {
    return <EmptyRefButton />;
  }

  const handleClick = () => {
    window.location.href = BASE_PATH + href;
  };

  return (
    <button
      onClick={handleClick}
      className="
        flex items-center justify-center gap-2
        px-6 py-3
        rounded-xl
        bg-black text-white
        font-medium
        shadow-md
        hover:bg-neutral-800
        hover:shadow-lg
        active:scale-95
        transition-all duration-200
      "
    >
      <span className="text-sm">◀</span>
      <span>Anterior</span>
    </button>
  );
}

export function NextRefButton({ href }: RefButtonProps) {
  if (!href) {
    return <EmptyRefButton />;
  }

  const handleClick = () => {
    window.location.href = BASE_PATH + href;
  };

  return (
    <button
      onClick={handleClick}
      className="
        flex items-center justify-center gap-2
        px-6 py-3
        rounded-xl
        bg-black text-white
        font-medium
        shadow-md
        hover:bg-neutral-800
        hover:shadow-lg
        active:scale-95
        transition-all duration-200
      "
    >
      <span>Siguiente</span>
      <span className="text-sm">▶</span>
    </button>
  );
}

export function EmptyRefButton() {
  return <div className="empty-ref-button" />;
}

// Video

interface VideoProps {
  src: string;
  width?: number;
}

export function Video({ src, width }: VideoProps) {
  if (width === undefined) {
    width = 600;
  }
  return (
    <video controls width={width}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

// Audio

interface AudioProps {
  src: string;
}

export function Audio({ src }: AudioProps) {
  return (
    <audio controls>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}

// Inline image

interface InlineImgProps {
  src: string;
  title?: string;
  onClick?: () => void;
  stopSignal?: boolean;
  h?: string;
  w?: string;
  offsetX?: string;
  offsetY?: string;
}

export function InlineImg({
  src,
  title,
  onClick,
  stopSignal = false,
  h = "1.25em",
  w = "5.5em",
  offsetX = "0px",
  offsetY = "5px",
}: InlineImgProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onClick?.();
  };

  useEffect(() => {
    if (stopSignal) setClicked(false);
  }, [stopSignal]);

  return (
    <span
      className="inline-img"
      style={
        {
          "--offset-x": offsetX,
          "--offset-y": offsetY,
        } as React.CSSProperties
      }
    >
      <img
        src={src}
        title={title}
        onClick={handleClick}
        className={`
          inline-block
          align-baseline
          transition-transform
          cursor-pointer
          duration-100
          ${clicked ? "scale-500 animate-shake" : ""}
        `}
        style={{
          height: h, // fully control height
          width: w, // fully control width independently
          objectFit: "fill", // allows non-1:1 aspect ratio
          transform: `translate(var(--offset-x), var(--offset-y))`,
        }}
      />
    </span>
  );
}

// Main Page Component

interface MainPageProps {
  title: string;
  Content: React.FC;
  prevRef?: string;
  nextRef?: string;
}

export function MainPage({ title, Content, prevRef, nextRef }: MainPageProps) {
  return (
    <main className="main">
      <Title title={title} />

      <div className="content-container">
        <Content />
      </div>

      <Divider />

      <div className="ref-button-container">
        <PrevRefButton href={prevRef} />
        <NextRefButton href={nextRef} />
      </div>
    </main>
  );
}

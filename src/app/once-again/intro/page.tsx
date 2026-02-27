"use client";

import { NextRefButton } from "../main-page";
import "../other-style.css";

function Content() {
  return (
    <>
      <p>
        Ya saben como va la cosa. Preparen su canchita o sus bingos o lo que
        sea.
      </p>
    </>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Content />

      <div className="flex justify-end w-full m-10">
        <NextRefButton href="1" />
      </div>
    </div>
  );
}

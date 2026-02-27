"use client";

import { useEffect } from "react";
import { BASE_PATH } from "./main-page";
import "./main-style.css";

export default function Home() {
  useEffect(() => {
    window.location.href = BASE_PATH + "direct";
  });

  return (
    <>
      <div className="main"></div>
    </>
  );
}

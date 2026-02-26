"use client";

import { EmptyRefButton, Divider, NextRefButton, Video } from "../main-page";
import "../other-style.css";

const Content: React.FC = () => {
  return (
    <>
      <Video src={"/status-update/silksong.mp4"} />
    </>
  );
};

export default function Cyan() {
  return (
    <>
      <main className="main">
        <div className="content-container">
          <Content />
        </div>

        <Divider />

        <div className="ref-button-container">
          <EmptyRefButton />
          <NextRefButton href={"1"} />
        </div>
      </main>
    </>
  );
}

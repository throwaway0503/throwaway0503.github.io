"use client";

import { MainPage, Audio } from "../main-page";

const CurrentContent: React.FC = () => {
  return (
    <>
      <img src={"/status-update/finale.gif"} />
      <p />
      <Audio src={"/status-update/thank-you.mp3"} />
    </>
  );
};

export default function Home() {
  return (
    <MainPage
      title="Thank you so much a-for-to playing my game!"
      Content={CurrentContent}
      prevRef={"17"}
    />
  );
}

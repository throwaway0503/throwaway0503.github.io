"use client";

import { MainPage, Video } from "../main-page";

const CurrentContent: React.FC = () => {
  return (<>
    <p>
      (Para mejorar la experiencia se recomienda tener audio activado xd)
    </p>
    <Video src="direct.mp4"/>
  </>);
};

export default function Home() {
  return (
    <MainPage title='Intro' Content={CurrentContent} prevRef={'direct'} nextRef={'2'}/>
  ); 
}
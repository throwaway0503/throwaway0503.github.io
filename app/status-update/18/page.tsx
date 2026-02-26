"use client";

import { MainPage, Audio } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <img src={"finale.gif"}/>
        <p/>
        <Audio src={"thank-you.mp3"}/>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Thank you so much a-for-to playing my game!' Content={CurrentContent} prevRef={'17'}/>
    ); 
}
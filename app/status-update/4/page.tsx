"use client";

import { MainPage, Video } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            Genial, gracias por aceptar venderme tu alma!!!
        </p>
        <p>
            (Sí, era parte del contrato. Te pasa por no leer las letras chiquitas)
        </p>
        <p>
            Así que bueno, toca empezar a hablar y dejar de shitpostear o algo así...
        </p>
        <img src="contract.gif"/>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Gracias por tu alma!!!' Content={CurrentContent} prevRef={'3'} nextRef={'5'}/>
    ); 
}
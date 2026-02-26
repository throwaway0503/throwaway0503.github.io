"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    const foreshadowing: string = "Foreshadowing is a narrative device in which a storyteller gives an advance hint of what is to come later in the story. Foreshadowing often appears at the beginning of a story, and it helps develop or subvert the audience's expectations about upcoming events.";

    return (<>
        <p>
            Desde que ocurrió todo esto, me dije a mí mismo que empezaría desde cero. Pero realmente ese no fue el caso. Fue más un episodio de relleno o algo así. Pero relleno del bueno como dije antes, aprendí mucho gracias a ese periodo de tiempo XD
        </p>
        <p>
            Pero no me comprometí a ello. No empecé desde cero realmente. Seguía pegado al pasado en múltiples formas ¿Pero ahora? No podría decir con certeza absoluta que ahora sí es el caso, pero si una cosa he aprendido, es que nunca se sabe si estarás listo... Sólo es un salto de fe (aguante spiderverse XD)
        </p>
        <p>
            Es por ello que decidí realmente dedicarme a ello en múltiples formas. Pero ahora no lo hago por un motivo externo, sino porque busco darle una clase de soft-reboot a mi vida. Se podría decir que es una clase de
            <b style={{ fontWeight: '1000', cursor: "pointer" }} title={foreshadowing}> nuevo inicio...</b>
        </p>
        <img src="leap-of-faith.jpg"/>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Un salto de fe...' Content={CurrentContent} prevRef={'7'} nextRef={'9'}/>
    ); 
}
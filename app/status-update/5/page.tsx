"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            Me gustaría empezar con el tema central de múltiples de los directs pasados. Estoy hablando de aquella que conocían como "janoflaca".
        </p>
        <p>
            "Pero, ¿no habías dicho que eso ya es agua pasada?". Pues sí, pero no vengo a decirles que volvimos a hablar ni nada. Solo vengo a actualizar de cómo voy al respecto.
        </p>
        <p>
            Empezaré haciendo un paréntesis diminuto al asunto. La vez pasada, les dije que, en todo caso, si quisieran referirse a ella o a este arco de mi vida, pues el nombre sería "velvel".
        </p>
        <p>
            Pues luego de haberlo reconsiderado desde entonces, preferiría que se le conozca como "Cyan", porque ese es el nombre de usuario que usaba cuando hablábamos constantemente; cuando la llamé mi "mejor amiga". Es por ello que me gustaría que se le recuerde más con ese nombre en lugar de recordarla con el nombre que llevaba cuando empezamos a tener problemas, por así decirlo.
        </p>
        <img src="velvel.png"/>
        <p>
            (De hecho me parece que esta es la primera vez que muestro la foto de perfil de velvel, ojala no le doxxeen o algo XD) 
        </p>
    </>);
};

export default function Home() {
    return (
        <MainPage title='velvel...' Content={CurrentContent} prevRef={'4'} nextRef={'6'}/>
    ); 
}
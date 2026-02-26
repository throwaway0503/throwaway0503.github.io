"use client";

import { MainPage, Video } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            <b style={{ fontWeight: '1000', cursor: "pointer" }} title={"puto el que lo lea"}> moonliit...</b>
        </p>
        <img src={"moonliit.png"}/>
        <p>
            'D4rkMn' fue inicialmente concebido como 'D4rkMoon'. No recuerdo exactamente en qué momento cambié el 'Moon' por 'Mn', pero nunca dejó de ser ello. 'Luna Oscura'?? ¿Qué quise decir con eso? Pues la verdad, no sé XD, solo lo elegí y pues... quedó.
        </p>
        <p>
            Y bueno, tras pensar por buen rato en un nuevo nombre de usuario que sentí que me representaría mejor, acabé llegando a este. Quería que se sienta familiar, pero distinto. Básicamente, lo mismo que estoy haciendo con este 'nuevo inicio' en general.
        </p>
        <p>
            La inspiración claramente es lo contrario a lo usual. Anteriormente era 'Luna Oscura'; ahora decidí que sea similar. No descartemos la
            <> </>
            <b style={{ fontWeight: '1000' }} title={"my thought process: 'moon'? me gusta ese nombre..."}>
                luna
            </b>. ¿Entonces cómo representaría algo distinto? Pues muy simple. En lugar de que sea oscura, pues que sea brillante, ¿no? Algo así, pero no exactamente...
        </p>
        <p>
            Busqué algo que represente algo distinto. En lugar de algo edgy, como la 'Luna Oscura', no nos olvidemos que es gracias a la luz de la luna que podemos ver de noche. Esa era la principal idea: 'Luz de luna'. Simboliza esperanza, una luz guía que se puede encontrar incluso en el medio de la noche.
        </p>
        <p>
            Pensé en variaciones de 'moonlight'. No estaba muy seguro de cómo enfocar el nombre, pero sabía que iría por allí. Luego de pensar en múltiples opciones, acabe en lo que ven, y la verdad que me acabó gustando: 'moonliit'.
        </p>
        <p>
            Entonces, lo que quiero decir con esto es que... quiero empezar de nuevo, no como 'D4rkMn', sino como 'moonliit'.
        </p>
        <p>
            En caso no haya quedado claro, esto no es solo un cambio de nombre de usuario y eso. Es también un cambio de cuenta de Discord. La anterior cuenta entonces quedará abandonada a favor de esta nueva. Incluso con esto, no la voy a borrar, porque de hacer ello se perderían varias cosas chistosas diría, así que en lugar solo será dejada abandonada.
        </p>
        <p>
            Espera, un momento... ¿Qué es eso?...
        </p>
        <Video src={"pronouns.mp4"}/>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Luz de luna' Content={CurrentContent} prevRef={'9'} nextRef={'11'}/> // jaja 9/11
    ); 
}
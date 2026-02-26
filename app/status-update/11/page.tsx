"use client";

import { MainPage, Video, Audio } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            Parece chiste, pero es verdad.
        </p>
        <img src={"enby.png"}/>
        <p>
            Para ser mas preciso, actualmente me identifico como semi-no binarie/semi-masculino. Técnicamente los pronombres 'they/him' en español sería algo tipo 'elle/él', pero esto de los pronombres son por preferencia personal, así que, por preferencia personal, en español de preferencia usen 'él', aunque no me molestaría si haces lo otro, supongo??? XD
        </p>
        <p>
            También cabe destacar que esto no significa nada fuera de una identidad. No es una orientación romántica/sexual. Aún me gustan las mujeres y no me gustan los hombres (sorprendente, lo sé XD)
        </p>
        <p>
            El hecho es que, pese a ser hombre de nacimiento, no me identifico con el género masculino, o al menos no al completo. Pese a ser hombre de nacimiento, no me siento cómodo realmente pensando que comparto género de nacimiento con los "machos alfa sigma mewing mamados barbudos" o una mierda o estereotipo así. Estoy al tanto, sin embargo, de que no tienes que ser 'masculino' para ser 'hombre', pero de todas formas elegí identificarme con esto porque siento que representa mejor mi identidad actual.
        </p>
        <p>
            La identidad y el género son un tema fluctuante y no estático, por lo que puede que en 'x' cantidad de tiempo decida retractarme de esto, así como puede que no.
        </p>
        <p>
            Con el tiempo he adoptado una perspectiva más positiva con respecto a lo que es este tipo de cosas. Empecé pensando que apoyo a la libertad de expresión y que la gente sea libre de elegir qué quieren ser. Luego acabé sintiendome identificado con estas personas por lo que es la búsqueda de identidad y sentir que no encajamos en un mundo que no ha sido diseñado con nosotros en cuenta. Y finalmente estoy aquí.
        </p>
        <p>
            Cabe resaltar que esta es una de las secciones más experimentales de todo este mensaje. O sea, ni yo estoy 100% seguro de si esto es lo que quiero, pero oye, nunca sabré si estaré seguro por completo... 
            <> </>
            <b style={{ fontWeight: '1000', cursor: "pointer" }} title={"LO DIJO OTRA VEZ NO ME LO CREO"}>
                solo es un salto de fe
            </b>.
        </p>
        <p>
            Pese a que sea experimental, llevo con esta idea de mi identidad desde ya más de 3 meses. Al inicio empezó sólo como una idea que entró a mi mente (como muchas de las que se me ocurren y luego se van). Después de darle unas cuantas vueltas en mi mente, decidí por lo menos tenerlo en cuenta cuando explore más sobre mi identidad. Quizá sólo es un pensamiento pasajero y eventualmente dejaré de sentirme así... ¿verdad?
        </p>
        <p>
            Tres meses después, esta idea no sólo sigue en mi mente, sino que con el paso del tiempo me identifico aun más con esto, así que creo que es medio seguro decir que no es sólo una idea precipitada. Pero de todos modos, quién sabe, esto sigue siendo experimental y altamente sujeto a cambio.
        </p>
        <p>
            Y bueno, un addendum: Para aquellos que se lo pregunten, el Blåhaj me lo compré no sólo de paso y por el chiste, sino también porque pensé que sería gracioso usarlo para simbolizar esta decisión que estoy tomando con respecto a mi identidad en general.
        </p>
        <img src={"blahaj.jpg"}/>
        <p>
            (Por cierto, se pronuncia Blåhaj:)
        </p>
        <Audio src={"blahaj.mp3"}/>
        <p>
            También, clips que envejecieron cuestionablemente XD:
        </p>
        <Video src={"gaturro.mp4"}/>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Pronombres...?' Content={CurrentContent} prevRef={'10'} nextRef={'12'}/>
    ); 
}
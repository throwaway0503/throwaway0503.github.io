"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            Muy bien, hagamos esto una última vez...
        </p>
        <img src={"ultima-vez.jpg"}/>
        <p>
            Me hago llamar Moon. También conocido como Jano, también conocido como Oré.
        </p>
        <p>
            NO fui mordido por una araña radioactiva o nada así... pero igual soy estúpido XD
        </p>
        <p>
            Me parece que se conocen el resto. Estudié en Innova Schools, hice amigos, al igual que no-amigos (creo??). Pasaron varias cosas: creé Fiestita en nombre a una cosa que dijo mi mamá una vez, me gustó Lucía (el incidente Lu menor que 3 XD), entré a UTEC, hice amigos, pasó lo de Cyan y bueno... estoy buscando cambiar. Ser mejor como persona. Y por ello estoy haciendo todo esto.
        </p>
        <p>
            Pero después de todo, sigo siendo la misma persona fundamentalmente hablando. Algunas cosas cambiarán aquí y allá, pero, después de todo, sigo siendo yo. Así que no importa cuántas veces me caiga, siempre encontraré una forma de levantarme.
        </p>
        <p>
            Y... aquí es donde me quede sin cosas que decir para seguir el copypasta (ojalá no haberme salido mucho de guión XD)
        </p>
        <p>
            Pero sí, fuera del chiste. Estoy buscando 'reintroducirme' a ustedes. Nada ha cambiado fundamentalmente como dije, pero me gustaría que me acepten por quien estoy eligiendo ser. Y, si bien nada de esto es algo muy diferente aún, déjenme ser dramático ctm XD.
        </p>
        <p>
            Y bueno, ya que estamos hablando de cosas diferentes a lo que mi personaje solía hacer, voy a compartirles algo que anteriormente para mí era algo bastante personal...
        </p>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Una última vez...' Content={CurrentContent} prevRef={'13'} nextRef={'15'}/>
    ); 
}
"use client";

import { MainPage } from "../main-page";

const PeakMusical: React.FC = () => {
    return (<>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=SYaAG2ElwqgzRB5l&amp;list=PLkmwTUpybyj6fORSH1gA6Yw_7j3cnj8gi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </>);
};

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            Una característica de mi ex-personaje es que realmente no tiene 'gustos musicales reales', por así decirlo. En caso de música la respuesta siempre era música de videojuegos exclusivamente.
        </p>
        <p>
            Ahora, no estoy intentando decir que la música de videojuegos no es música o algo así (ese argumento es estúpido, pero ese no es el tema XD)
        </p>
        <p>
            Lo que estoy intentando decir es que siempre me he restringido a limitar los gustos que comparto hacia otros, porque sentía que mi personaje me limitaba a ello. "Mi personaje no escucha música, solo juega jueguitos y ya" y, por ende, ese 'personaje' debía ser 'yo'.
        </p>
        <p>
            Y de hecho esto no era incorrecto inicialmente. Básicamente, a causa de este personaje me estaba forzando a no escuchar otro tipo de música porque "escuchar música de videojuegos es lo que mi personaje hace"... pero, poco antes desde que inició la universidad empecé a explorar y experimentar más con respecto a ello y empecé a formar gustos que se salían de personaje...
        </p>
        <p>
            Sin embargo, casi nunca se lo he contado a alguien por miedo a romper este personaje que ya había establecido. "Mi personaje no haría eso, así que yo tampoco lo haré", pensé. Pero, como ya se podrán imaginar cómo va esta mierda, obviamente voy a romper eso ahora mismo.
        </p>
        <p>
            Como ya había dicho antes, esto puede parecer algo trivial a simple vista y, objetivamente hablando, supongo que lo es, pero para mí es mucho más que eso. Solo se lo he contado a dos personas antes: Cyan y Pachis. En general algo así de simple para mí significa mucho porque bueno asi soy XD
        </p>
        <p>
            Así que bueno, aquí tienen un sneak-peak a mis gustos musicales reales:
        </p>
        <PeakMusical/>
        <p>
            <a href="https://youtube.com/playlist?list=PLkmwTUpybyj6fORSH1gA6Yw_7j3cnj8gi&si=xVNP5TrHdz2t4oNn" target="_blank" rel="noopener noreferrer">
                (Enlace directo a la playlist de YT si quieren)
            </a>
        </p>
        <p>
            (btw Spotify es una mierda y por eso uso yt music, jodanse :V)
        </p>
        <p>
            De hecho esta es una playlist que creé inicialmente para compartirle un sneak-peak de mis gustos musicales a Pachis, porque a pesar de que uso yt music realmente no uso playlists, sólo escucho lo que esta en quick play creo que se llama.
        </p>
        <p>
            Esta playlist no solo es una compilación de canciones que me gustan, sino que son todas canciones que clasificaría como 'peak' (de allí el nombre de esta página), porque evocan en mí cierta sensación de grandeza que no sabría muy bien cómo describir en palabras.
        </p>
        <p>
            Si bien hay muchas más canciones que escucho, no todas serían clasificadas como 'peak'. Aunque igual hay un tiempo para todo. No todas las canciones tienen que evocar esta grandeza para ser buenas. A veces solo quiero escuchar música más simple y más movida, y eso está bien. En todo caso si les gustaría también un poco de eso avisen nomás XD
        </p>
        <p>
            Por cierto, la playlist está diseñada para ser escuchada en orden, no shuffleada. No por ninguna razón fuerte en particular, sino porque también hice el esfuerzo de que las canciones 'alineen' bien en términos de tono. Siento que así las canciones quedan mejor.
        </p>
        <p>
            Y también, notarán tal vez que hay mucha presencia de este grupo llamado 'Muse' (mis GOATS), al igual que una canción de videojuegos se coló a la playlist real (es que Bury the Light temazo imo)
        </p>
        <p>
            Puede que mis gustos musicales difieran de los suyos (así como puede que no, no sabría decirles XD), pero si quieren discutir cualquier cosa al respecto entonces díganlo. Me encantaría conocer sus opiniones al respecto después de tanto ocultar mis gustos reales XD
        </p>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Peak musical' Content={CurrentContent} prevRef={'14'} nextRef={'16'}/>
    ); 
}
"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <img src={"ahora-que.jpg"}/>
        <p>
            Con eso fuera del camino, ahora puedo continuar con lo demás.
        </p>
        <p>
            Había mencionado previamente que, por toda la situación, me alejé de mi grupo de amigos anterior y empecé un ciclo básicamente solo. Y bueno, si bien no fue mi mejor ciclo emocionalmente hablando (irónicamente, académicamente hablando sí lo fue XD), ese tiempo que pasé sólo realmente lo necesité.
        </p>
        <p>
            Ese tiempo sólo me sirvió para enfocarme en mí mismo y para reflexionar sobre qué soy y sobre qué quiero ser. Pasé por varios momentos de crisis existencial/emocional, pero bueno, bien dicen que una vez tocas fondo no hay nada que no sea subir, o algo así XD
        </p>
        <p>
            Si bien aun no tengo un grupo de amigos establecido en la universidad, estoy seguro que haré un avance al respecto este ciclo. Es verdad que cuento con Coque y el niño que ahora son Utec-tards como yo. Pero no solo nuestros horarios divergen fuertemente, sino que también estoy buscando iniciar con gente nueva para desarrollo personal. Obviamente me mantendré en contacto, pero creo que se entiende lo que quiero decir XD
        </p>
        <p>
            Como dije anteriormente, el ciclo pasado fue un ciclo que me lo tomé para mí solo, pero esta vez vuelvo a darle con fuerzas. Estoy buscando pasarme por clubs universitarios y cosas así, a ver si algo sale de esto. Sigue siendo bastante experimental, pero eh, lo que importa es que se está intentando y que se hace con ánimo!!1!
        </p>
        <p>
            Este pasado ciclo he tenido bastante tiempo para reflexionar sobre qué quiero ser y cómo quiero llegar a esto. Es gracias a ello que estoy tomando nuevas decisiones que previamente no había ni considerado hasta ahora, y la verdad siento que estoy encaminado a sentirme mejor conmigo mismo en general.
        </p>
        <p>
            Es por ello que...
        </p>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Y ahora...?' Content={CurrentContent} prevRef={'6'} nextRef={'8'}/>
    ); 
}
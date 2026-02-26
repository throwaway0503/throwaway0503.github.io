"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
    <p>
        Pues bueno, a nada...
    </p>
    <p>
        Desde el último update real, les conté que corté todo contacto con Cyan por cosas que ocurrieron entre nosotros. Como ya lo mencione anteriormente, este sigue siendo el caso y ello no cambiará.
    </p>
    <p>
        Aunque una cosa que quiero mencionar que me pareció interesante fue que una vez decidí mencionarla (porque estabamos hablando de algo y pues entró al tema de mencionarla como persona que cumplía las características de las que estabamos justo hablando).
    </p>
    <p>
        Pues bueno, a esto, Mino (si no me equivoco) me dijo que no debería mencionarlo porque ya era "agua pasada". Pero, la verdad es que, incluso con todo lo que pasó, no puedo simplemente hacer como que nada de esto haya ocurrido. Si bien las cosas no salieron de forma 'ideal' por así decirlo, es innegable lo que ocurrió.
    </p>
    <p>
        Gracias a ella aprendí mucho sobre mí, y es gracias a ella que estoy donde estoy, para bien o para mal. No lo querría de otra manera. Si bien siento que sufrí mucho por toda esta cosa, es gracias a esto que estoy saliendo adelante como ser humano en múltiples formas y, por ello, estoy eternamente agradecido.
    </p>
    <p>
        Gracias a ella aprendí bastante de mis fallas como persona y, por ello, recibí apoyo incluso cuando no pensé que lo necesitaba. Incluso luego de habernos separado por completo, sigo aprendiendo mucho de cómo vivir, de cómo pensar de una forma más abierta (aunque no lo crean XD) y de cómo ser yo.
    </p>
    <p>
        Entonces, no solo no quiero que se pretenda que esto no pasó y ya, sino que se vea como lo que fue: como una oportunidad para mí para crecer y aprender. Es en vista de todo esto que veo sobre nuestra relación en retrospectiva, que creo que finalmente ella estaría orgullosa de mí, pese a todo lo que pasó, y eso me hace sentirme feliz.
    </p>
    <p>
        Sobre esto, mi psicóloga me dice que, en cierta forma, me estoy proyectando externamente para poder darme un cumplido a mí mismo (porque bueno, no estoy muy acostumbrado a darme cumplidos a mí mismo por baja autoestima y eso claro xd) y... si bien creo que tiene razón (y es bueno pensar en ello porque significa que en cierta forma estoy mejorando en mi auto-confianza), también creo de verdad que la Cyan que conocí realmente estaría orgullosa de mí, y eso me hace sentir muy feliz.
    </p>
    <p>
        Bueno, para cerrar este tema... un saludo para Cyan. Gracias por nuestro tiempo juntos. Incluso aunque nunca leerás esto, me gustaría que sepas que, pese a todo lo que pasó, guardas un lugar muy especial en mi corazón.
    </p>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Sobre Cyan' Content={CurrentContent} prevRef={'5'} nextRef={'7'}/>
    ); 
}
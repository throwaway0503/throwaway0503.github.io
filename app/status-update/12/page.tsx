"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    const foreshadowing: string = "FORESHADOWING IS A NARRATIVE DEVICE IN WHICH A STORYTELLER GIVES AN ADVANCE HINT OF WHAT IS TO COME LATER IN THE STORY. FORESHADOWING OFTEN APPEARS AT THE BEGINNING OF A STORY, AND IT HELPS DEVELOP OR SUBVERT THE AUDIENCE'S EXPECTATIONS ABOUT UPCOMING EVENTS.";

    return (<>
        <p>
            En otra nota similar, esto que diré ahora es algo bastante experimental (sí, aun más que lo del nuevo username y la identidad de género).
        </p>
        <p>
            Similar a lo que dije anteriormente, siempre tuve el nombre 'Alejandro' en baja estima. No me malinterpreten, no me parece un mal nombre. Solo que nunca me sentí realmente identificado con este. De hecho, inicialmente tampoco me sentía identificado con 'Jano', pero luego siento que me queda mejor que Alejandro la verdad XD
        </p>
        <p>
            Bueno, pues igual pensé que era porque no estaba acostumbrado, al igual que cuando inicialmente me empezaron a llamar 'Oré' en Innova, o 'Jano' en fiestita. Así que bueno, lo intenté.
        </p>
        <p>
            En este tiempo en el que tuve amigos de universidad que se referían a mí exclusivamente como 'Alejandro' pensé tal vez que me acostumbraría... pero la verdad aún me parece un nombre ajeno a mí... no siento que soy yo realmente. Hasta me sentía más identificado con mi nombre de usuario que con 'Alejandro', así que eso dice algo definitivamente XD
        </p>
        <p>
            Es por ello que, luego de bastante consideración, me decidí en un nombre que siento que me representa mejor y que me gustó (que además era gender-neutral claro xd):
            <> </>
            <b style={{ fontWeight: '1000', cursor: "pointer" }} title={foreshadowing}>
                'Moon'.
            </b>
        </p>
        <p>
            Pero bueno, no estoy exigiendo que ahora me digan así. También voy por 'Oré' o 'Jano' (y 'Alejandro' por tecnicismo, pero preferiblemente no xd); así que, en teoría, no debería de haber ningún cambio para ustedes (porque imagina llamarme Alejandro XD) y entonces solo les estaba contando sobre esta decisión que tomé.
        </p>
        <p>
            Como les digo, esta es probablemente la decisión más experimental aquí, porque decirles a las personas que conozca en universidad que me llamen 'Moon' es algo que nunca he hecho realmente, pero bueno toca intentar supongo XD
        </p>
        <img src={"moon.png"}/>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Moon.' Content={CurrentContent} prevRef={'11'} nextRef={'13'}/>
    ); 
}
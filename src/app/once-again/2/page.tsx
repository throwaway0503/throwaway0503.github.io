"use client";

import { useState } from "react";
import { MainPage, InlineImg, Video } from "../main-page";
import "../main-style.css";

function CurrentContent() {
  const [audioMusePlaying, setAudioMusePlaying] = useState(false);
  const [audioHivesPlaying, setAudioHivesPlaying] = useState(false);

  const hives = () => {
    if (audioHivesPlaying) return;

    const audio = new Audio("/once-again/forever.mp3");
    audio.play();
    setAudioHivesPlaying(true);

    // Reset animation when audio ends
    audio.addEventListener("ended", () => {
      setAudioHivesPlaying(false);
    });
  };

  const muse = () => {
    if (audioMusePlaying) return;

    const audio = new Audio("/once-again/cydonia.mp3");
    audio.play();
    setAudioMusePlaying(true);

    // Reset animation when audio ends
    audio.addEventListener("ended", () => {
      setAudioMusePlaying(false);
    });
  };

  return (
    <>
      <p>Yup. Estuve alli. Y no le dije a mino.</p>
      <Video src="/once-again/black-parade.mp4" />
      <p>
        "P-pero... por q-" Calla mierda. La respuesta es muy simple. PORQUE SE
        ME SALIO DEL POTO. Sali en secreto con mi flaca secreta? No. Sali con
        alguien? No. Entonces? Simplemente, quise ir. Y fui. Por mi cuenta.
        Porque pude, y porque quise.
      </p>
      <p>
        Inicialmente no tenia planeado ir por mi cuenta. Es mas, ni siquiera
        tenia planeado ir. Pense que me gustaria ir con alguien, pero no sabia
        con quien, ni sabia a quien decirle. A algunas personas que conocia les
        pregunte, pero nadie queria ir. No pregunte en fiestita porque... idk,
        no se me ocurrio XD
      </p>
      <p>
        La cosa es que, estaba muy cerca de no ir. Pero la cosa es que.... en
        aquel entonces andaba escuchando mucho My Chemical Romance (y aun lo
        sigo haciendo xd). No tanto como{" "}
        <InlineImg
          src="/once-again/muse.png"
          title="THE HIVES FOREVER, FOREVER THE HIVES"
          onClick={muse}
          stopSignal={!audioHivesPlaying}
        />
        , pero si bastante.
      </p>
      <p>
        Pero en un momento de 'a la mierda todo', decidi que queria ir. Le dije
        a mi mama, incluso considerando que seria la primera* vez que iria a un
        concierto.
      </p>
      <p className="text-sm text-neutral-500">
        (*: Tecnicamente no seria mi primera vez en un concierto. Hace an;os fui
        al concierto de 'Juan Diego Flores' junto con Miguel porque estaba con
        el, y justo el se iba ir alli y tenian una entrada libre, y mi mama me
        obligo a ir para 'culturizarme'. Una puta mierda tbh, no me gusto para
        nada XD)
      </p>
      <p>
        PERO BUENO. Mas que nada fue mi capricho propio. Al inicio pense en que
        quizas deberia de decirle a mino una vez me entere que el estaba yendo.
        Pero la verdad, luego de pensarlo, decidi nuevamente hacer como que
        nada. Porque queria que sea una experiencia para mi.
      </p>
      <p>
        No teina ni idea si me iba a gustar, considerando que mi unica
        experiencia fue una mierda, y considerando que quizas el ruido fuerte me
        joda los oidos... Pero bueno, tocaba probar. Experiencias son
        experiencias.
      </p>
      <p>
        Y pues... me encanto. Quien diria que si, en lugar de tener a un sen;or
        de la esquina mixeando audio en un parlante de mierda, tuviesemos un
        equipo de sonido de concierto profesional monitoreado por expertos en
        audio, en lugar de dolerme los oidos me encantaria XD. Obviamente
        tambien si en lugar de cumbia en una fiesta de hora loca fuese punk emo
        rock pero bueno.....
      </p>
      <p>
        Tambien, me parece que les dije que mi celular viejo se malogro, no?
        Pues, es mentira. No se malogro, me lo robaron saliendo del concierto
        XD, lo cual es una mierda no solo por perder el celular, sino porque
        alli tenia grabado el inicio del concierto (el concierto de{" "}
        <InlineImg
          src="/once-again/hives.png"
          title="THE HIVES FOREVER, FOREVER THE HIVES"
          onClick={hives}
          stopSignal={!audioHivesPlaying}
        />
        )...... Pero eso es una historia para otro dia XD
      </p>
      <p>
        Bueno, la cosa es que, decidi iniciar el textazo con esto porque quiero
        dar a entender una cosa... quiero ser una persona por mi cuenta. No
        estoy diciendo que 'a la mierda las demas personas' o una estupidez asi,
        sino que quiero permitirme vivir experiencias por mi y para mi. Y en el
        caso de este concierto, si bien hubieron sus lados buenos y malos, no lo
        cambiaria por nada en el mundo. Uno de los mejores dias de mi vida creo
        XD
      </p>
      <p className="text-sm text-neutral-500">
        Aunque si, en caso haya algun otro concierto asi bien piola al que me
        gustaria ir, probablemente les diga... o probablemente no, quien sabe.
        Quizas les diga, pero no para invitarles, sino para contarles nomas e ir
        por mi cuenta.
      </p>
      <p>
        Puede que parezca tonto, pero para mi esto es mucho. Antes nunca me he
        permitido hacer cosas por mi cuenta... Casi como si yo no existiese como
        individuo, sino solo como miembro de algo mas. Y pues... la verdad es
        que si quiero existir, y me gusta poder tomar micro-decisiones como
        estas para mi. Me da cierta felicidad
      </p>
    </>
  );
}

export default function Home() {
  return (
    <MainPage
      title="LONG LIVE THE BLACK PARADE!"
      Content={CurrentContent}
      prevRef="1"
      nextRef="3"
    />
  );
}

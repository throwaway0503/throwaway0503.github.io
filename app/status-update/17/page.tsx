"use client";

import { MainPage, BASE_PATH } from "../main-page";

const CurrentContent: React.FC = () => {
  const banca = () => {
    window.location.href = BASE_PATH + "cyan";
  };

  const fiestita = () => {
    window.location.href = BASE_PATH + "fiestita.mp4";
  };

  const pachis = () => {
    window.location.href = BASE_PATH + "pachis.mp4";
  };

  return (
    <>
      <p>Sí, creditos.</p>
      <p>
        Primero lo obvio. Quiero agradecer a Fiestita en general por estar aquí.
      </p>
      <img
        style={{ cursor: "pointer" }}
        src={"fiestita.jpg"}
        onClick={fiestita}
      />
      <p>
        Segundo a una persona que tuvo su sección entera XD: Cyan. Ya dije lo
        que tenía que decir antes, así que allí queda.
      </p>
      <div style={{ cursor: "pointer" }} onClick={banca}>
        <img src={"banca.jpg"} />
      </div>
      <p>
        Tercero, Pachis. Gracias por estar allí para escuchar mis mierdas en
        cualquier momento y por soportar mis estupideces como si fueses mi
        pseudo-psicólogo o algo así, gracias por tanto y perdón por tan poco XD
      </p>
      <p>
        Cuarto, Pachis otra vez XD, porque fui la primera persona a la que le
        mostré la página y se ofreció a corregir varias faltas ortográficas por
        allí XD
      </p>
      <img style={{ cursor: "pointer" }} src={"pachis.png"} onClick={pachis} />
      <p>Y bueno, ahora sí sería todo...</p>
    </>
  );
};

export default function Home() {
  return (
    <MainPage
      title="Créditos???"
      Content={CurrentContent}
      prevRef={"16"}
      nextRef={"18"}
    />
  );
}


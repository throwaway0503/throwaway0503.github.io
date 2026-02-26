"use client";

import { MainPage, Video } from "../main-page";

const CurrentContent: React.FC = () => {
	const easterEggs: string = "Los huevos de pascua de San Andreas en particular, tienen la facultad de ser... oscuros... y muy, tétricos.";

	return (<>
		<p>
			Sí, una página, ¿por qué no? Me tomé como un mini-proyecto hacer esta página y, bueno, pues salió bien diría yo xd.
		</p>
		<p>
			El motivo por el cual decidí escribir esto mediante una página, y no sólo por un mensaje de Discord largo como los que suelo escribir, es porque este es relativamente aún más largo.
		</p>
		<p>
			También porque pensé que hacerlo de esta forma me permitiría establecer una mejor estructura sobre el mensaje en cuestión, al igual que me ofrece la posibilidad de integrar imágenes o videos al mensaje. Así como también me permite segmentar mi mensaje en "páginas" donde cada página representa su propio tema, lo cual me integrar mejor pacing en general al mensaje (al igual que algunos cuantos momos e
			<> </>
			<b style={{ fontWeight: '1000', cursor: "pointer" }} title={easterEggs}>easter-eggs</b>
			<> </>
			porque sí xd)
		</p>
		<Video src="travesti.mp4"/>
		<p> 
			Obviamente, a mí me importa el pacing de este tipo de mensajes largos que escribo porque soy un dramático de mierda que le gusta contar cosas con estructura cohesiva porque así funciono XD
		</p>
		<p>
			Bueno, en todo caso, por donde empiezo...
		</p>
		<img src="write-fire.gif"/>
  	</>);
};

export default function Home() {
  	return (
		<MainPage title='En serio? Una pagina???' Content={CurrentContent} prevRef={'1'} nextRef={'3'}/>
	); 
}
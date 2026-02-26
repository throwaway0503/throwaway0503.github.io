"use client";

import { useState } from "react";
import { MainPage } from "../main-page";

const CurrentContent = ({ isChecked, setIsChecked }: { isChecked: boolean, setIsChecked: (val: boolean) => void }) => {
  	return (<>
		<p>
			Quizás esto sea medio innecesario de mencionar, pero quiero asegurarme de que va a ser el caso.
		</p>
		<p>
			• Prometes no odiarme luego de leer esto.
		</p>
		<p>
			Sí, suena dramático, pero lo digo porque sino mi ansiedad no me lo permitiría o algo XD
		</p>
		<p>
			Realmente no hay nada "revolucionario" aquí, pero definitivamente hay cosas, así que, quizás esto sirva como warning para que anticipen por donde va la cosa.
		</p>
		<p>
			Similarmente, también quiero destacar que mucho de lo que voy a mencionar aquí no son decisiones finales y están sujetas a cambio. Todo este mensaje está lleno de cosas que diría que son experimentales, y por ende no es nada 100% definitivo.
		</p>
		<p>
			Así que bueno, para reiterar lo innecesario. Como parte del contrato:
		</p>
		<p>
			• Prometes no odiarme luego de leer esto.
		</p>
		<p style={{ fontSize: '40%' }}>
			(También me vendes tu alma)
		</p>
		<div className="input-thing">
			<input className="checkbox" type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
			<div className="contract">Acepto los términos y condiciones</div>
		</div>
		<p>
			Si bien dudo que esto sea necesario, nunca se sabe XD
		</p>
  	</>);
}

export default function Home() {
	const [isChecked, setIsChecked] = useState(false);
	const content: React.FC = (() => <CurrentContent isChecked={isChecked} setIsChecked={setIsChecked} />) as React.FC;

	return (
		<MainPage title="Contrato:" Content={content} prevRef="2" nextRef={isChecked ? "4" : undefined}/>
	); 
}

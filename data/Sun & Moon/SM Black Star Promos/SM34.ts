import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Bewear GX",
		fr: "Chelours GX",
		es: "Bewear GX",
		it: "Bewear GX",
		pt: "Bewear GX",
		de: "Kosturso GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		760,
	],
	hp: 210,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bear Hug",
				fr: "Câlin d’Ours",
				es: "Abrazo de Oso",
				it: "Presa dell’Orso",
				pt: "Abraço de Urso",
				de: "Dicke Umarmung"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Impact",
				fr: "Double Impact",
				es: "Impacto Doble",
				it: "Doppio Impatto",
				pt: "Impacto Duplo",
				de: "Doppelter Einschlag"
			},
			effect: {
				en: "Flip 2 coins. This attack does 100 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
			},
			damage: "100×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Throw GX",
				fr: "Grand Lancer GX",
				es: "Gran Lanzamiento GX",
				it: "Gran Lancio GX",
				pt: "Arremessão GX",
				de: "Großer Wurf GX"
			},
			effect: {
				en: "Discard your opponent’s Active Pokémon and all cards attached to it. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta el Pokémon Activo de tu rival y todas las cartas unidas a él. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege das Aktive Pokémon deines Gegners und alle an es angelegten Karten auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card

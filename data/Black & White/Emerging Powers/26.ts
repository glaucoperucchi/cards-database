import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Ducklett",
		fr: "Couaneton",
		es: "Ducklett",
		it: "Ducklett",
		pt: "Ducklett",
		de: "Piccolente"
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		580,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Roost",
				fr: "Atterrissage",
			},
			effect: {
				en: "Heal 40 damage from this Pokémon. This Pokémon can't retreat during your next turn.",
				fr: "Soignez 40 dégâts à ce Pokémon. Ce Pokémon ne peut pas battre en retraite pendant votre prochain tour.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie Éclaboussante",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card

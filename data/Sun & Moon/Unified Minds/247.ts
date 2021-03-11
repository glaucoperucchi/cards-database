import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Garchomp & Giratina-GX",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 270,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Linear Attack",
			},
			effect: {
				en: "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Fightning",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Calamitous Slash",
			},
			effect: {
				en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
			},
			damage: 160,

		},
		{
			cost: [
				"Fightning",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "GG End GX",
			},
			effect: {
				en: "Discard 1 of your opponent's Pokémon and all cards attached to it. If this Pokémon has at least 3 extra {F} Energy attached to it (in addition to this attack's cost), discard 2 of your opponent's Pokémon instead. (You can't use more than 1 GX attack in a game.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],





}

export default card
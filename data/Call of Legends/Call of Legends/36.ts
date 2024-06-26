import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Tyrogue",
		de: "Rabauz"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		236,
	],
	hp: 30,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sweet Sleeping Face",
				de: "Niedliches Schlafgesicht"
			},
			effect: {
				en: "As long as Tyrogue is Asleep, prevent all damage done to Tyrogue by attacks.",
				de: "Solange Rabauz schläft, verhindere allen Schaden, der Rabauz durch Angriffe zugefügt wird."
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Mischievous Punch",
				de: "Gehässiger Hieb"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance. Tyrogue is now Asleep.",
				de: "Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert. Rabauz schläft jetzt."
			},
			damage: 30,

		},
	],






}

export default card

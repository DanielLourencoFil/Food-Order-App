import { Language } from "../interface";

export const portugues: Language = {
	navbar: {
		order: {
			text: "peça agora",
			phone: "012 345 678",
		},
		menu: ["início", "produtos", "menu", "eventos", "blog", "contato"],
	},
	hero: {
		slide01: ["Quente & Apimentada", "pizza", "50% DESC", "peça agora"],
		slide02: ["melhor", "pizza", "artesanal", "é aqui!"],
		slide03: ["compre 2", "leve 3"],
	},
	pizzaCardSection: {
		title: "The Best pizza in town",
		desc: "Sunt et aute deserunt dolor excepteur laboris elit ea esse esse aute excepteur. Enim ut aliquip excepteur occaecat enim veniam nostrud ullamco commodo velit tempor.",
		pizzaCard: {
			tittle: "Napolitana",
			price: "22,90",
			desc: "Amet culpa laborum labore occaecat occaecat commodo pariatur veniam.",
		},
	},
	footer: {
		moto: "oh sim, nós fazemos isso! DonDani Pizza, fatias de pizza bem assadas e crocantes.",
		adress: {
			title: "encontre nossos restaurantes",
			places: [
				{
					adress: [
						"1654 R. Don Road #123",
						"New York, 87654",
						"(602) 867-1010",
					],
				},
				{
					adress: [
						"1654 K. Lanquine Road #343",
						"York, 87344",
						"(602) 867-1011",
					],
				},
				{
					adress: [
						"1654 E. Erwin  Road #673",
						"New York, 8272",
						"(602) 867-1012",
					],
				},
				{
					adress: [
						"1654 W. Caroll St #445",
						"New York, 86543",
						"(602) 867-1014",
					],
				},
			],
		},
		hours: {
			title: "horário de funcionamento",
			times: [
				{ time: ["segunda até sexta", "9:00 - 22:00"] },
				{ time: ["sábado - domingo", "12:00 - 24:00"] },
			],
		},
	},
};
export const english: Language = {
	navbar: {
		order: {
			text: "order now",
			phone: "012 345 678",
		},
		menu: ["homepage", "products", "menu", "events", "blog", "contact"],
	},
	hero: {
		slide01: ["hot & spice", "pizza", "50% OFF", "order now"],
		slide02: ["best", "homemade", "pizza", "is here!"],
		slide03: ["buy 2", "get 3"],
	},
	pizzaCardSection: {
		title: "The Best pizza in town",
		desc: "Sunt et aute deserunt dolor excepteur laboris elit ea esse esse aute excepteur. Enim ut aliquip excepteur occaecat enim veniam nostrud ullamco commodo velit tempor. Sunt et aute deserunt dolor excepteur laboris elit ea esse esse aute excepteur. Enim ut aliquip excepteur occaecat enim veniam nostrud ullamco commodo velit tempor.",
		pizzaCard: {
			tittle: "Neapolitan",
			price: "22.90",
			desc: "Amet culpa laborum labore occaecat occaecat commodo pariatur veniam.",
		},
	},
	footer: {
		moto: "oh yes, we did it! DonDani Pizza, well baked slice of pizza.",
		adress: {
			title: "find our restaurants",
			places: [
				{
					adress: [
						"1654 R. Don Road #123",
						"New York, 87654",
						"(602) 867-1010",
					],
				},
				{
					adress: [
						"1123 K. Lanquine Road #343",
						"New York, 87344",
						"(602) 867-1011",
					],
				},
				{
					adress: [
						"6784 E. Erwin  Road #673",
						"New York, 8272",
						"(602) 867-1012",
					],
				},
				{
					adress: [
						"365 W. Caroll St #445",
						"New York, 86543",
						"(602) 867-1014",
					],
				},
			],
		},
		hours: {
			title: "Working hours",
			times: [
				{ time: ["monday until friday", "9:00 - 22:00"] },
				{ time: ["saturday - sunday", "12:00 - 24:00"] },
			],
		},
	},
};

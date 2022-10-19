export interface PizzaList {
	pizzaList: Pizza[];
}

export interface Pizza {
	_id: string;
	title: string;
	img: string;
	prices: number[];
	desc: string;
	extraOptions: ExtraOption[];
	createdAt: Date | string;
	updatedAt: Date | string;
	__v: number;
}

export interface ExtraOption {
	topping: string;
	price: number[];
	_id: string;
}

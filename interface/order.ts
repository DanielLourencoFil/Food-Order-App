export interface CartOrder {
	// orderId?: String;
	products?: OrderSingle[];
	quantity: number;
	total: number;
}

export interface OrderSingle {
	_id: string;
	img: string;
	name: string;
	size: string;
	price: number;
	extras: string[];
	quantity: number;
	total: number;
}

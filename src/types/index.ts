export interface ProductIProps {
  id: string;
  ticketName: string;
  description: string;
  price: number;
  count: number;
  isVip: boolean;
}

export interface State {
  products: ProductIProps[];
  cart: ProductIProps[];
}

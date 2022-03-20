export type Product = {
  id: string;
  price: number;
  description: string;
  img: string;
  title: string;
};

export type ShopingCart = {
  total: number;
} & Product;

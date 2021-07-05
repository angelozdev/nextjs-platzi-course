export interface Attributes {
  description: string;
  shape: string;
  hardiness: string;
  taste: string;
}

export interface Product {
  name: string;
  id: string;
  sku: string;
  price: number;
  image: string;
  attributes: Attributes;
}

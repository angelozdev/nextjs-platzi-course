import faker from "faker/locale/en_US";
import { Product } from "types/product";

type Products = {
  [id: string]: Omit<Product, "id">;
};

const fakeProduct = (): Products => {
  return {
    [faker.datatype.uuid()]: {
      attributes: {
        description: faker.commerce.productDescription(),
        taste: faker.commerce.productAdjective(),
        hardiness: `${faker.datatype.number({ max: 10, min: -10 })} °C`,
        shape: faker.commerce.color(),
      },
      image: `https://source.unsplash.com/500x500?${faker.commerce.productAdjective()}`,
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price(10, 1000, 2)),
      sku: faker.finance.account(),
    },
  };
};

export const fakeProducts = (number = 5) => {
  const products: Products = {};

  for (let i = 0; i < number; i++) {
    const [key, value] = Object.entries(fakeProduct())[0];
    products[key] = value;
  }

  return products;
};

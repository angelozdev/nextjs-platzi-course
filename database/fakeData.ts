import faker from "faker/locale/en_US";
import { Product } from "types/product";

const fakeProduct = (): Product => ({
  id: faker.datatype.uuid(),
  attributes: {
    description: faker.commerce.productDescription(),
    taste: faker.commerce.productAdjective(),
    hardiness: `${faker.datatype.number({ max: 10, min: -10 })} °C`,
    shape: faker.commerce.color(),
  },
  image: faker.image.imageUrl(500, 500, "tech", true),
  name: faker.commerce.productName(),
  price: Number(faker.commerce.price(10, 1000, 2)),
  sku: faker.finance.account(),
});

export const fakeProducts = (number = 5) => {
  const products = new Array<Product>(number);

  for (let i = 0; i < number; i++) {
    products[i] = fakeProduct();
  }

  return products;
};

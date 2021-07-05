import { Product } from "types/product";
import { fakeProducts } from "./fakeData";

const products = fakeProducts(5);

class Database {
  async getAll(): Promise<Product[]> {
    const response = Object.entries(products).map(([id, value]) => ({
      id,
      ...value,
    }));

    return Promise.resolve(response);
  }

  async getById(id: string): Promise<Product> {
    const product = products[id];

    if (!product) {
      return Promise.reject(`[DATABASE] id: "${id}" not found.`);
    }

    return Promise.resolve({
      id,
      ...product,
    });
  }
}

export default Database;

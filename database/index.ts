import { Product } from "types/product";
import { fakeProducts } from "./fakeData";

const products = fakeProducts(5);

class Database {
  async getAll(): Promise<Product[]> {
    return Promise.resolve(products);
  }

  async getById(id: string): Promise<Product> {
    const product = products.find((product) => product.id === id);

    if (!product) {
      return Promise.reject(`[DATABASE] id: "${id}" not found.`);
    }

    return Promise.resolve(product);
  }
}

export default Database;

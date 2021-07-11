import { Fragment } from "react";

// types
import { Product as IProduct } from "types/product";

// components
import { ProductCard } from "components";

// styles
import styles from "./styles";

interface Props {
  products: IProduct[];
}

function Products({ products }: Props) {
  return (
    <Fragment>
      <ul>
        {products.map(({ attributes, id, image, name, price, sku }) => (
          <ProductCard
            key={id}
            name={name}
            image={image}
            price={price}
            sku={sku}
            attributes={attributes}
            id={id}
          />
        ))}
      </ul>

      <style jsx>{styles}</style>
    </Fragment>
  );
}

export default Products;

import { Fragment } from "react";

// next
import Image from "next/image";

// types
import { Product } from "types/product";

// styles
import styles from "./styles";

function ProductCard({ name, image, price }: Product) {
  if (!image) {
    return null;
  }

  return (
    <Fragment>
      <li className="container">
        <Image
          src={image}
          alt={name}
          width={100}
          height={90}
          layout="responsive"
          objectFit="cover"
        />
        <div className="details">
          <p className="name">
            <strong>{name}</strong>
          </p>
          <p className="price">$ {price}</p>
        </div>
      </li>
      <style jsx>{styles}</style>
    </Fragment>
  );
}

export default ProductCard;

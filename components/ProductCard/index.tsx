import { Fragment } from "react";

// next
import Image from "next/image";
import Link from "next/link";

// types
import { Product } from "types/product";

// utils
import { imageLoader } from "utils";

// styles
import styles from "./styles";

function ProductCard({ name, image, price, id }: Product) {
  if (!image) {
    return null;
  }

  return (
    <Fragment>
      <li className="container">
        <Link
          href={{
            pathname: "/product/[id]",
            query: { id },
          }}
        >
          <a>
            <Image
              loader={imageLoader}
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
          </a>
        </Link>
      </li>
      <style jsx>{styles}</style>
    </Fragment>
  );
}

export default ProductCard;

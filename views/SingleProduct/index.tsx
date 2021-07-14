import { Fragment } from "react";

// next
import Image from "next/image";

// components
import { Wrapper } from "components";

// types
import { Product } from "types/product";

// styles
import styles from "./styles";

// utils
import { imageLoader } from "utils";

function SingleProduct({ name, image, price, sku, attributes }: Product) {
  return (
    <Fragment>
      <div className="container">
        <Wrapper>
          <div className="grid">
            <figure>
              <Image
                loader={imageLoader}
                src={image}
                alt={name}
                layout="responsive"
                width={100}
                height={100}
              />
            </figure>

            <div className="main-details">
              <h1 className="title">{name}</h1>
              <p className="price">$ {price}</p>
              <span className="label" role="pill">
                SKU <span>{sku}</span>
              </span>

              <div className="form-control">
                <input type="number" defaultValue={1} min={1} max={100} />
                <button>
                  {/* <Icons.Cart width={40} /> */}
                  <strong>Add to cart</strong>
                </button>
              </div>
            </div>
          </div>

          <div className="details">
            <h2>About this product</h2>
            <p>{attributes.description}</p>
          </div>
        </Wrapper>
      </div>

      <style jsx>{styles}</style>
    </Fragment>
  );
}

export default SingleProduct;

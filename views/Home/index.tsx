import { Fragment } from "react";

// components
import { Products, Icons, Wrapper } from "components";

// types
import { Product } from "types/product";

// styles
import styles from "./styles";

// local types
interface Props {
  products: Product[];
}

function Home({ products }: Props) {
  return (
    <Fragment>
      <div className="container">
        <Wrapper>
          <div className="content">
            <div className="header">
              <h1>
                <span>Zitpal</span>
                <Icons.Store width="50" />
                <span>Store</span>
              </h1>
            </div>
            <Products products={products} />
          </div>
        </Wrapper>
      </div>

      <style jsx>{styles}</style>
    </Fragment>
  );
}

export default Home;

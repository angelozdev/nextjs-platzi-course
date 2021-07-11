import { Fragment } from "react";

// next
import Link from "next/link";

// styles
import styles from "./styles";

// components
import { Icons, Wrapper } from "components";

// constants
import { Routes } from "@constants";

function Navbar() {
  return (
    <Fragment>
      <header>
        <nav>
          <Wrapper>
            <div className="content">
              <Link href={Routes.HOME}>
                <a className="item">
                  <Icons.Store width="40" />
                  <span>Store</span>
                </a>
              </Link>

              <Link href={Routes.CART}>
                <a className="item">
                  <Icons.Cart width="40" />
                  <small>(0)</small>
                </a>
              </Link>
            </div>
          </Wrapper>
        </nav>
      </header>
      <style jsx>{styles}</style>
    </Fragment>
  );
}

export default Navbar;

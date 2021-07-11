import { Fragment } from "react";

// next
import Link from "next/link";
import { useRouter } from "next/router";

// fixtures
import { navigation } from "./fixtures";

// styles
import styles from "./styles";

function Navbar() {
  const { pathname } = useRouter();

  return (
    <Fragment>
      <header>
        <nav>
          <ul>
            {navigation.map(({ href, text }) => (
              <li className={pathname === href ? "active" : ""} key={text}>
                <Link href={href}>
                  <a>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <style jsx>{styles}</style>
    </Fragment>
  );
}

export default Navbar;

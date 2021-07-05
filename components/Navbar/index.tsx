import Link from "next/link";
import { navigation } from "./fixtures";

function Havbar() {
  return (
    <header>
      <nav>
        <ul>
          {navigation.map(({ text, href }) => (
            <li key={text}>
              <Link href={href}>
                <a>{text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Havbar;

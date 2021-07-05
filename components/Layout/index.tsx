import { Fragment, PropsWithChildren } from "react";

// components
import { Navbar } from "components";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <footer>This is the footer</footer>
    </Fragment>
  );
}

export default Layout;

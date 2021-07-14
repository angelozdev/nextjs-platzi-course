import { Fragment, PropsWithChildren } from "react";

// components
import { Navbar } from "components";
import Footer from "components/Footer";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;

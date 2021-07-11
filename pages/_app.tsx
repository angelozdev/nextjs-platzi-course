import type { AppProps } from "next/app";
import styles from "styles/globals";

// components
import { Layout } from "components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx>{styles}</style>
    </Layout>
  );
}
export default MyApp;

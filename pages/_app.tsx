import type { AppProps, NextWebVitalsMetric } from "next/app";
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

export function reportWebVitals({ name, value }: NextWebVitalsMetric) {
  if (process.env.NODE_ENV === "development") {
    console.log(
      `%c[Web Vitals] ${name}: ${value.toFixed(0)}ms`,
      "color: #00828b;"
    );
  }
}
export default MyApp;

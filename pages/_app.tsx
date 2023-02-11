import type { AppProps } from "next/app";
//Layout
import Layout from "components/Layout";
//Styles
import "../styles/main.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
};

export default App;

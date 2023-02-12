import type { AppProps } from "next/app";
//Layout
import Layout from "components/Layout";
//Styles
import "../styles/main.scss";
//Apollo Client
import { ApolloProvider } from "@apollo/client";
import apolloClient from "lib/apollo";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    //All components now able to send GraphQL queries
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ApolloProvider>
  );
};

export default App;

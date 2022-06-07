import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import App from "./App";

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  console.log(graphqlErrors, networkErrors);
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql?" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function ApolloProviderComponent() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

export default ApolloProviderComponent;

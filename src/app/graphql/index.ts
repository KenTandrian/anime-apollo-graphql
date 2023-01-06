import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://anilist.co/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;

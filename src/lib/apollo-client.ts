import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://testeweb.pecege.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Rlc3Rld2ViLnBlY2VnZS5jb20iLCJpYXQiOjE3MjQwOTk1NzUsIm5iZiI6MTcyNDA5OTU3NSwiZXhwIjoxODgxODY1OTc1LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.j3u1NGSyjrJoUdgvw-skhB_41r0YAYKV9NzWg0Fv-Q4`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

import React from "react";
import ReactDOM from "react-dom";
import theme from "./theme";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "./store";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { getAccessToken, setAccessToken } from "./hooks/accessTokens";
import { App } from "./components/App";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwtDecode, { JwtPayload } from "jwt-decode";

const authLink = setContext((_, { headers }) => {
  const accessToken = getAccessToken();
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});
const refreshLink = new TokenRefreshLink({
  accessTokenField: "accessToken",
  isTokenValidOrUndefined: () => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      return true;
    }
    try {
      const { exp } = jwtDecode<JwtPayload>(accessToken);
      if (!exp) {
        return true;
      }
      return Date.now() <= exp * 1000;
    } catch {
      return false;
    }
  },
  fetchAccessToken: () => {
    return fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include",
    });
  },
  handleFetch: (accessToken: string) => {
    setAccessToken(accessToken);
  },
});

const errorLink = onError((err) => {
  if (err.graphQLErrors) {
    err.graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
    console.log(err.graphQLErrors);
  }

  if (err.networkError) {
    console.log(`[Network error]: ${err.networkError}`);
  }
});

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

// order matters!
var additiveLink = ApolloLink.from([
  refreshLink,
  authLink,
  errorLink,
  httpLink,
]);

const client = new ApolloClient({
  link: additiveLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import { ApolloProvider } from "@apollo/client";
import Container from "@material-ui/core/Container";

import client from "./client";
import Main from "./pages/Main/Main";

const App: React.FC = (): JSX.Element => (
  <Container>
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  </Container>
);

export default App;

import React from "react";
import { ApolloProvider } from "@apollo/client";
import Container from "@material-ui/core/Container";

import client from "./client";
import Grid from "./components/molecules/Grid/Grid";

const App: React.FC = (): JSX.Element => (
  <Container>
    <ApolloProvider client={client}>
      <Grid />
    </ApolloProvider>
  </Container>
);

export default App;

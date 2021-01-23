import React from "react";
import { ApolloProvider } from "@apollo/client";
import Container from "@material-ui/core/Container";

import client from "./client";
import Data from './components/atoms/Comp/Comp'

const App: React.FC = (): JSX.Element => (
  <Container>
    <ApolloProvider client={client}>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Data />
    </ApolloProvider>
  </Container>
);

export default App;

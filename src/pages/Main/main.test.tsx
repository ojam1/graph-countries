import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import Main from "./Main";
import { COUNTRY_DATA } from "../../apollo/queries";

test("renders main page", () => {
  const mocks = [
    {
      request: {
        query: COUNTRY_DATA,
      },
      result: {
        data: {
          Country: [
            {
              name: "United Kingdom",
              nativeName: "England",
              population: 1000000,
              capital: "London",
              flag: "",
              languages: [{ name: "English" }],
            },
          ],
        },
      },
    },
  ];

  const main = render(
    <MockedProvider mocks={mocks}>
      <Main />
    </MockedProvider>
  );

  expect(main).toBeTruthy();
});

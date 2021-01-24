import React from "react";
import { render } from "@testing-library/react";

import DisplayCard from "./DisplayCard";

describe("Display Card Component", () => {
  const props = {
    name: "United Kingdom",
    nativeName: "England",
    population: 1000000,
    capital: "London",
    flag: "",
    languages: [{ name: "English" }],
  };

  it("should display name", () => {
    const { getByText } = render(<DisplayCard {...props} />);

    expect(getByText("United Kingdom, England")).toBeTruthy();
  });
  it("should display population", () => {
    const { getByText } = render(<DisplayCard {...props} />);

    expect(getByText("Population: 1000000")).toBeTruthy();
  });
  it("should display capital", () => {
    const { getByText } = render(<DisplayCard {...props} />);

    expect(getByText("Capital: London")).toBeTruthy();
  });
  it("should display language", () => {
    const { getByText } = render(<DisplayCard {...props} />);

    expect(getByText("English")).toBeTruthy();
  });
});

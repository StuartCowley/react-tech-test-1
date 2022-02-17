import React from "react";
import App from "../components/App";
import { render } from "@testing-library/react";

describe("App", () => {
  const { asFragment } = render(<App />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});

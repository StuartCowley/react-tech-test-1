import React from "react";
import Search from "../components/Search";
import { render } from "@testing-library/react";

describe("Search", () => {
  const { asFragment } = render(
    <Search setSearchResults={jest.fn()} setUserHasSearched={jest.fn()} />
  );

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});

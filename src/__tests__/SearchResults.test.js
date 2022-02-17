import React from "react";
import SearchResults from "../components/SearchResults";
import { render, screen } from "@testing-library/react";

describe("SearchResults", () => {
  const validProps = {
    results: [
      {
        data: [
          {
            title: "ROBOTS TO ROCKET CITY",
            nasa_id: "MSFC-1600354",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/MSFC-1600354/MSFC-1600354~thumb.jpg",
          },
        ],
      },
      {
        data: [
          {
            title: "ROBOTS TO ROCKET CITY",
            nasa_id: "MSFC-1600353",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/MSFC-1600353/MSFC-1600353~thumb.jpg",
          },
        ],
      },
    ],
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchResults results={validProps.results} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("returns the search results", () => {
    render(
      <SearchResults
        results={validProps.results}
        userHasSearched={validProps.userHasSearched}
      />
    );
    const imageResults = screen.getAllByAltText("space-img");

    for (let x = 0; x < imageResults.length; x += 1) {
      expect(imageResults[x]).toHaveClass("data-img");
    }

    expect(imageResults).toHaveLength(2);
  });
});

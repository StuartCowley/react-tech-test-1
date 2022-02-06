import React from "react";
import PropTypes from "prop-types";

import "../styles/SearchResults.css";

const SearchResults = ({ results, userHasSearched }) => {
  if (results.length === 0 && userHasSearched === false) {
    return null;
  }

  if (results.length === 0 && userHasSearched === true) {
    return <p>No results found.</p>;
  } else {
    return (
      <div className="search-results">
        {results.map((image) => (
          <img
            className="data-img"
            src={image}
            alt="space-img"
            data-testid="data-img"
          />
        ))}
      </div>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.array,
};

export default SearchResults;

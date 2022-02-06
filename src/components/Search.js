import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults, setUserHasSearched }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
    setUserHasSearched(true);
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
  setUserHasSearched: PropTypes.func.isRequired,
};

export default Search;

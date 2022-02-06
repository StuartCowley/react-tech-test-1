import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

import "../styles/App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [userHasSearched, setUserHasSearched] = useState(false);

  return (
    <div className="tech-test-app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search
        setSearchResults={setSearchResults}
        setUserHasSearched={setUserHasSearched}
      />
      <SearchResults
        results={searchResults}
        userHasSearched={userHasSearched}
      />
    </div>
  );
}

export default App;

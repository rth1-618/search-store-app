import React, { useState } from "react";
import "./assets/scss/main.scss";
import { faker } from "@faker-js/faker";
import SearchBar from "./components/SearchBar/SearchBar";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Ratings from "./components/Ratings/Ratings";

const App: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  return (
    <div className="wrap">
      <div className="App">
        <SearchBar setIsSearchFocused={setIsSearchFocused} />
        {isSearchFocused && <FeaturedProducts />}
        <Ratings rate={3} raters={120} />
        <Ratings rate={4} />
      </div>
    </div>
  );
};

export default App;

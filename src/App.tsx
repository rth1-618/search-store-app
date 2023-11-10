import React, { useState } from "react";
import "./assets/scss/main.scss";
import { faker } from "@faker-js/faker";
import SearchBar from "./components/SearchBar/SearchBar";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";

const App: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  return (
    <div className="wrap">
      <div className="App">
        <SearchBar setIsSearchFocused={setIsSearchFocused} />
        {isSearchFocused && <FeaturedProducts />}
      </div>
    </div>
  );
};

export default App;

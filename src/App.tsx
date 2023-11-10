import React, { useEffect, useState } from "react";
import "./assets/scss/main.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Ratings from "./components/Ratings/Ratings";
import { DataService } from "./services/data";
import { IProduct } from "./core/types/IProduct";
import ItemGroup from "./components/ItemGroup/ItemGroup";
import FilterGroup from "./components/Filters/FilterGroup";
import { IFilter } from "./core/types/IFilter";

const App: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filters, setFilters] = useState<IFilter>({
    brands: [],
    priceRange: [],
    rating: [],
  });

  useEffect(() => {
    setProducts(DataService.getAllProducts());
  }, []);

  return (
    <div className="wrap">
      <div className="App">
        <SearchBar setIsSearchFocused={setIsSearchFocused} />
        {isSearchFocused && <FeaturedProducts />}
        <Ratings rate={3} raters={120} />
        <Ratings rate={4} />
        <FilterGroup setFilters={setFilters} />
        <ItemGroup products={products}></ItemGroup>
      </div>
    </div>
  );
};

export default App;

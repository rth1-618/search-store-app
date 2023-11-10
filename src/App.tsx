import React, { useEffect, useState } from "react";
import "./assets/scss/main.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import { DataService } from "./services/data";
import { IProduct } from "./core/types/IProduct";
import ItemGroup from "./components/ItemGroup/ItemGroup";
import FilterGroup from "./components/Filters/FilterGroup";
import { IFilter } from "./core/types/IFilter";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";

const App: React.FC = () => {
  const [isResultPage, setIsResultPage] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [srchText, setSrchText] = useState<string>("");
  const [filters, setFilters] = useState<IFilter>({
    brands: [],
    priceRange: [],
    rating: [],
  });
  useEffect(() => {
    // console.log("filters", filters);
    if (
      !srchText &&
      !filters.brands.length &&
      !filters.priceRange.length &&
      !filters.rating.length
    ) {
      setProducts(DataService.getAllProducts());
    } else {
      setProducts(
        DataService.getFilteredData(
          srchText,
          filters.priceRange,
          filters.rating,
          filters.brands
        )
      );
    }
  }, [filters, isResultPage, srchText]);

  return (
    <>
      {isResultPage ? (
        <div className="wrap-no-bg">
          <div className="srch-bar-in-results">
            <SearchBar
              setSrchText={setSrchText}
              setIsSearchFocused={setIsSearchFocused}
              setIsResultPage={setIsResultPage}
            />
          </div>
          <h1 className="title">Search Results</h1>
          <div className="aside">
            <FilterGroup setFilters={setFilters} />
          </div>
          <ItemGroup products={products} />
        </div>
      ) : (
        <div className="wrap">
          <div className="App">
            <div className="landing">
              <SearchBar
                setSrchText={setSrchText}
                setIsSearchFocused={setIsSearchFocused}
                setIsResultPage={setIsResultPage}
              />
              {isSearchFocused && <FeaturedProducts />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;

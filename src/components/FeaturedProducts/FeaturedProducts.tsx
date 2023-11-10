import React, { useEffect, useState } from "react";
import { IProduct } from "../../core/types/IProduct";
import { DataService } from "../../services/data";
import ItemCard from "../ItemCard/ItemCard";
import "./FeaturedProducts.scss";

const FeaturedProducts = () => {
  const [featuredProds, setFeaturedProds] = useState<IProduct[]>([]);
  const [suggestedProds, setSuggestedProds] = useState<IProduct[]>([]);

  useEffect(() => {
    setFeaturedProds(DataService.getFeaturedProducts());
    setSuggestedProds(DataService.getPopularSuggestions());
  }, []);
  return (
    <div className="trend__container">
      <div className="trend__title">Latest Trends</div>
      <div className="trend__flex">
        {featuredProds.map((prod, idx) => (
          <ItemCard key={idx} product={prod} isFeat={true} />
        ))}
      </div>
      <div className="trend__title">Popular Suggestions</div>
      {suggestedProds.map((prod, idx) => (
        <div key={idx} className="suggested">
          {prod.name}
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;

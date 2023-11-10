import React from "react";
import { IProduct } from "../../core/types/IProduct";
import ItemCard from "../ItemCard/ItemCard";
import "./ItemGroup.scss";

const ItemGroup: React.FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <div className="container__results">
      {products.map((product, idx) => (
        <ItemCard key={idx} product={product} />
      ))}
    </div>
  );
};

export default ItemGroup;

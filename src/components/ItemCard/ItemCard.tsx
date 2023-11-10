import React, { useState } from "react";
import { IProduct } from "../../core/types/IProduct";
import "./ItemCard.scss";

const ItemCard: React.FC<{ product: IProduct; isFeat?: boolean }> = ({
  product,
  isFeat = false,
}) => {
  return (
    <>
      {isFeat ? (
        <div className="card__box-feat">
          <img
            src={product.pic}
            alt={product.name.toLocaleLowerCase().split(" ").join("-")}
            className="card__img"
          />

          <div className="card__title">{product.name}</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ItemCard;

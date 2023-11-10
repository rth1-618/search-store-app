import React, { useState } from "react";
import { IProduct } from "../../core/types/IProduct";
import "./ItemCard.scss";
import Ratings from "../Ratings/Ratings";

const ItemCard: React.FC<{ product: IProduct; isFeat?: boolean }> = ({
  product,
  isFeat = false,
}) => {
  const [fav, setFav] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);
  const toggleFav = () => {
    setFav(!fav);
  };
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
        <div className="card__box">
          <img
            onMouseOver={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
            src={product.pic}
            alt={product.name.toLocaleLowerCase().split(" ").join("-")}
            className="card__img"
          />
          {fav ? (
            <i
              onClick={() => toggleFav()}
              className="bi bi-heart-fill fav__icon-fill"
            />
          ) : (
            <i onClick={() => toggleFav()} className="bi bi-heart fav__icon" />
          )}

          {showButton && (
            <div
              onMouseOver={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className="view-btn"
            >
              View Product
            </div>
          )}
          <div>{product.name}</div>
          <div>
            <span className="striked">Rs. {product.origPrice}</span>{" "}
            <span className="price"> Rs. {product.price}</span>
          </div>
          <Ratings rate={product.rating} raters={product.totalRaters} />
        </div>
      )}
    </>
  );
};

export default ItemCard;

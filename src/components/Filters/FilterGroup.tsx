import React, { ChangeEvent, useEffect, useState } from "react";
import Filters from "./Filters";
import { DataService } from "../../services/data";
import { NO_OF_RATINGS } from "../../core/constants/core-constants";
import Ratings from "../Ratings/Ratings";
import "./FilterGroup.scss";
import { IFilter } from "../../core/types/IFilter";
import { handleFilterChange } from "../../core/utils/util-functions";
import { PriceEnum } from "../../core/constants/filter.enum";

const FilterGroup: React.FC<{
  setFilters: (value: React.SetStateAction<IFilter>) => void;
}> = ({ setFilters }) => {
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<PriceEnum[]>([]);
  const [selectedRating, setSelectedRating] = useState<number[]>([]);
  const ratingMap: number[] = new Array(NO_OF_RATINGS).fill(0);

  useEffect(() => {
    setBrands(DataService.getBrands());
  }, []);

  useEffect(() => {
    const filters: IFilter = {
      brands: selectedBrands,
      priceRange: priceRange,
      rating: selectedRating,
    };

    setFilters(filters);
    // console.log("selectedBrands", selectedBrands);
    // console.log("priceRange", priceRange);
    // console.log("selectedRating", selectedRating);
  }, [selectedBrands, priceRange, selectedRating, setFilters]);

  return (
    <>
      <Filters title="brand">
        {brands.map((brand, idx) => {
          return (
            <div key={idx}>
              <input
                id={`brand-${brand}`}
                type="checkbox"
                onChange={(e) =>
                  handleFilterChange<string, ChangeEvent<HTMLInputElement>>(
                    e,
                    brand,
                    selectedBrands,
                    setSelectedBrands
                  )
                }
              />
              <label htmlFor={`brand-${brand}`}>{brand}</label>
            </div>
          );
        })}
      </Filters>

      <hr color="gray" />
      <Filters title="price range">
        <input
          id="pr-lt-500"
          type="checkbox"
          onChange={(e) =>
            handleFilterChange<PriceEnum, ChangeEvent<HTMLInputElement>>(
              e,
              PriceEnum.Under500,
              priceRange,
              setPriceRange
            )
          }
        />
        <label htmlFor="pr-lt-500">Under 500</label>
        <br />
        <input
          id="pr-gt-500"
          type="checkbox"
          onChange={(e) =>
            handleFilterChange<PriceEnum, ChangeEvent<HTMLInputElement>>(
              e,
              PriceEnum.Between1000To3000,
              priceRange,
              setPriceRange
            )
          }
        />
        <label htmlFor="pr-gt-500">1000 to 3000</label>
      </Filters>
      <hr color="gray" />
      <Filters title="ratings">
        {ratingMap.map((r, idx) => (
          <div key={idx}>
            <input
              id={`filter-rating-${idx}`}
              type="checkbox"
              onChange={(e) =>
                handleFilterChange<number, ChangeEvent<HTMLInputElement>>(
                  e,
                  idx + 1,
                  selectedRating,
                  setSelectedRating
                )
              }
            />
            <label htmlFor={`filter-rating-${idx}`}>
              <Ratings rate={idx + 1} />
            </label>
          </div>
        ))}
      </Filters>
    </>
  );
};

export default FilterGroup;

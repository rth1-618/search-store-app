import { PriceEnum } from "../constants/filter.enum"

export interface IFilter {
    priceRange: PriceEnum[]
    rating: number[]
    brands: string[]
}
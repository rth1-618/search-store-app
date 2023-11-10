import { faker } from "@faker-js/faker";
import { IProduct } from "../core/types/IProduct";
import { randomInteger } from "../core/utils/util-functions";
import { PriceEnum } from "../core/constants/filter.enum";

const noOfProducts=50;
const noOfBrands=5;

const brands: string[] = new Array(noOfBrands).fill(0).map(x => faker.company.name())
const products: IProduct[] = new Array(noOfProducts).fill(0).map(x=>{
    const og=parseFloat(faker.commerce.price({ min: 100, max: 3000 }))
    const obj={
        name: faker.commerce.productName(),
        brand: brands[randomInteger(0,noOfBrands - 1)],
        origPrice: og,
        price: og - randomInteger(0,Math.floor(og/2)),
        // pic: faker.image.fashion(),
        pic: faker.image.urlLoremFlickr({width: 200, height:300, category:'nature'}),
        rating: randomInteger(1,5),
        totalRaters: randomInteger(20, 600) 
    }
    return obj;
}) 
export const DataService = {
    getAllProducts: () => {
            const array=[...products]
            return array
       
    },

    getFeaturedProducts: () => {
        const idxList: IProduct[] =[];
        new Array(5).fill(0).forEach((x)=>idxList.push(products[randomInteger(0,noOfProducts-1)]))
        return idxList;
    },

    getPopularSuggestions(){
        return this.getFeaturedProducts();
    },

    getBrands() {
        return brands;
    },
     getFilteredData: (
        prodName: string = "",
        priceRange: PriceEnum[] = [], 
        rating: number[]=[], 
        brand: string[] = []
    ): IProduct[] => {
        
       
        
       const filtered = products.filter(prod => {
            return (prodName && prod.name.includes(prodName))
                    ||(brand.length && brand.includes(prod.brand)) 
                    || (priceRange.includes(PriceEnum.Under500) && prod.price <= 500) 
                    || (priceRange.includes(PriceEnum.Between1000To3000) && prod.price >= 1000 && prod.price <= 3000) 
                    || (rating.includes(1) && prod.rating === 1)  
                    || (rating.includes(2) && prod.rating === 2)  
                    || (rating.includes(3) && prod.rating === 3)  
                    || (rating.includes(4) && prod.rating === 4)  
                    || (rating.includes(5) && prod.rating === 5) 
        })

       
        return filtered
        
    }
}
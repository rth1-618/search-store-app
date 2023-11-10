import { faker } from "@faker-js/faker";
import { IProduct } from "../core/types/IProduct";
import { randomInteger } from "../core/utils/util-functions";

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
    }
}
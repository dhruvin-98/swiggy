import {GrocerGridCard} from "../Utils/Grocery"
import Grocerycard from "./GroceryCard"

export default function GroceryOption(){


    return(
         <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="text-3xl font-bold">Shop Groceries on Instamart</h1>
            <div className="  container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-8">
                    {
                        GrocerGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                    }
                  </div>
        </div>
    )
}
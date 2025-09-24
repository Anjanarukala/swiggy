import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import {useState} from 'react'
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
export const RestaurantMenu=()=>{
     const{resId}=useParams();
     const restInfo=useRestaurantMenu(resId);
     const [showItems,setShowItems]=useState(false)
     const [showIndex,setShowIndex]=useState(null)
    if(restInfo===null)return <Shimmer/>
    const {name,cuisines,costForTwoMessage}=restInfo?.data?.cards?.[2]?.card?.card?.info;
    const categories=restInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    return(
    <div className="text-center">
        <h1 className="font-bold m-3 text-2xl">{name}</h1>
        <p className="font-medium text-lg">{cuisines.join(",")}-{costForTwoMessage} </p>
        {console.log(categories)}
        { 
            categories.map((c,index)=>(
                 <RestaurantCategory key={c.card.card.categoryId} 
                 data={c?.card?.card} 
                 showItems={index===showIndex?true:false}
                 setShowIndex={()=>setShowIndex(index)} 
                />
            ))
        }
    </div>
)}
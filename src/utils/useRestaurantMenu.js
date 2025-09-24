import { useEffect,useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu=(resId)=>{
    const[restInfo,setRestInfo]=useState(null);
    const fetched=async()=>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();
        setRestInfo(json)
    }
    useEffect(()=>{
        fetched();
    },[])
    return restInfo;
}
export default useRestaurantMenu;
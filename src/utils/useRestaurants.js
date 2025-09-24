import { useEffect,useState } from "react"
import { REST_URL } from "./constants"

const useRestaurants=()=>{
    const [restoList,setRestoList]=useState([]);
    const [filteredList,setFilteredList]=useState([])
    const fetched=async()=>{
        const data=await fetch(REST_URL);
        const json=await data.json();
        
        const restaurants=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restaurants)
        setRestoList(restaurants||[]);
        setFilteredList(restaurants||[]);
    }
    useEffect(()=>{
        fetched();
    },[])
    return [restoList,filteredList,setFilteredList];
}
export default useRestaurants;
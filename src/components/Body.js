import RestoCard,{enhancedCard} from "./RestoCard"
import {useState} from 'react'
import Shimmer from './Shimmer'
import { Link } from "react-router-dom"
import useRestaurants from "../utils/useRestaurants"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body=()=>{
    const [input,setInput]=useState("")
    const [restoList,filteredList,setFilteredList]=useRestaurants();
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return(
        <h2>You went offline!!!, please Check your connection</h2>
        )
    }
    const PremiumCard=enhancedCard(RestoCard);
    return restoList.length===0?<Shimmer></Shimmer>:(
        <div className="">
            <div className="flex items-center justify-between">
                <div className="search">
                    <input type="text" className="border border-black m-2 " value={input}  onChange={(e)=>setInput(e.target.value)}></input>
                    <button onClick={()=>setFilteredList(restoList.filter((e)=>e.info.name.toLowerCase().includes(input.toLowerCase())))} className="border border-black rounded-lg px-2">Search</button>
                </div>
                <div className="items-center">
                    <button className="border border-black rounded-lg px-2 " onClick={()=>{
                    const filtered=restoList.filter((list)=>list.info.avgRatingString>4.2)
                    setFilteredList(filtered)
                }
                }>Top Rated Restaurants</button>
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {
                    filteredList.map((resto)=>(
                    <Link key={resto.info.id}  to={"/restaurant/"+resto.info.id}>
                        {
                        resto.info.avgRatingString>"4.3"?<PremiumCard restaurant={resto} />:
                        <RestoCard  restaurant={resto}></RestoCard>
                    }
                    </Link>))
                }
            </div>
        </div>
    )
}
export default Body;
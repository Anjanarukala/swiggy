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
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                    <div className="text-6xl mb-4">📡</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">You're Offline!</h2>
                    <p className="text-gray-600">Please check your internet connection and try again.</p>
                </div>
            </div>
        )
    }
    
    const PremiumCard=enhancedCard(RestoCard);
    
    const handleSearch = () => {
        if(input.trim() === "") {
            setFilteredList(restoList);
        } else {
            setFilteredList(restoList.filter((e)=>e.info.name.toLowerCase().includes(input.toLowerCase())));
        }
    };
    
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSearch();
        }
    };
    
    return restoList.length===0?<Shimmer></Shimmer>:(
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white py-12">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Delicious Food Delivered</h1>
                    <p className="text-xl mb-8">Order from your favorite restaurants</p>
                </div>
            </div>
            
            {/* Search and Filter Section */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                    <div className="flex items-center bg-white rounded-full shadow-lg p-2 w-full md:w-auto">
                        <input 
                            type="text" 
                            className="flex-1 px-4 py-2 rounded-full outline-none text-gray-700 placeholder-gray-400" 
                            placeholder="Search for restaurants..."
                            value={input}  
                            onChange={(e)=>setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button 
                            onClick={handleSearch} 
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors duration-200 ml-2"
                        >
                            🔍 Search
                        </button>
                    </div>
                    
                    <div className="flex gap-4">
                        <button 
                            className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg" 
                            onClick={()=>{
                                const filtered=restoList.filter((list)=>list.info.avgRatingString>4.2)
                                setFilteredList(filtered)
                            }}
                        >
                            ⭐ Top Rated
                        </button>
                        <button 
                            className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg" 
                            onClick={()=>setFilteredList(restoList)}
                        >
                            🔄 Show All
                        </button>
                    </div>
                </div>
                
                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-gray-600 text-lg">
                        Showing <span className="font-semibold text-orange-600">{filteredList.length}</span> restaurants
                    </p>
                </div>
                
                {/* Restaurant Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {
                        filteredList.map((resto)=>(
                        <Link key={resto.info.id} to={"/restaurant/"+resto.info.id} className="transform hover:scale-105 transition-transform duration-200">
                            {
                            resto.info.avgRatingString>"4.3"?<PremiumCard restaurant={resto} />:
                            <RestoCard restaurant={resto}></RestoCard>
                        }
                        </Link>))
                    }
                </div>
                
                {/* No Results */}
                {filteredList.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🍽️</div>
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">No restaurants found</h3>
                        <p className="text-gray-500">Try adjusting your search or filters</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Body;

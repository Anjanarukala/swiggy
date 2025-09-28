import {SWIGGY_URL} from '../utils/constants'

const RestoCard=({restaurant})=>{
    const{name,cuisines,cloudinaryImageId,locality,costForTwo,avgRatingString}=restaurant.info;
    return(
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
                <img
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                    src={SWIGGY_URL + cloudinaryImageId}
                    alt={name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 truncate" title={name}>{name}</h3>
                
                <div className="flex items-center mb-2">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                        ⭐ {avgRatingString}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">{costForTwo}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {cuisines.slice(0,3).join(", ")}
                </p>
                
                <div className="flex items-center text-gray-500 text-sm">
                    <span className="mr-1">📍</span>
                    <span className="truncate">{locality}</span>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                        <span className="text-orange-500 font-semibold text-sm">Order Now</span>
                        <span className="text-orange-500">→</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RestoCard;

export const enhancedCard=(RestoCard)=>{
    return (props)=>
        {
         return (
         <div className="relative">
            <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                ✨ Premium
            </div>
            <div className="ring-2 ring-purple-200 ring-offset-2 rounded-xl">
                <RestoCard {...props}/>
            </div>
        </div>
    )
    }
}

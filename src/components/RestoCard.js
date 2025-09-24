import {SWIGGY_URL} from '../utils/constants'

const RestoCard=({restaurant})=>{
    const{name,cuisines,cloudinaryImageId,locality,costForTwo,avgRatingString}=restaurant.info;
    return(
        <div className="w-[250px] h-[380px] p-4 m-4  rounded-lg  bg-gray-100 hover:bg-gray-300 ">
            <img
            className="h-[200px] w-[200px] rounded-lg mb-5 " src={
             SWIGGY_URL  +cloudinaryImageId
            }></img>
            <h3>{name}</h3>
            <h4>{cuisines.slice(0,2).join(",")}</h4>
            <h4>{locality}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRatingString}</h4>
        </div>
    )
}
export default RestoCard;

export const enhancedCard=(RestoCard)=>{
    return (props)=>
        {
         return (
         <div>
            <label className=" absolute bg-black text-white m-2 p-2 rounded-ee-3xl">Premium</label>
            <RestoCard {...props}/>
        </div>
    )
    }
}
   
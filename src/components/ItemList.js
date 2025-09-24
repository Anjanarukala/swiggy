import { useDispatch } from "react-redux";
import { SWIGGY_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList=({items})=>{
    
    const dispatch=useDispatch()
    const handleAddItem=(i)=>{
        dispatch(addItem(i))// dispatching an action, with object {payload:""}
    }
    return(
        <div>
            {
            items.map((i)=>(
                <div key={i.card.info.id} className="flex p-2 m-2 border-gray-200 border-b-2 text-left justify-between ">
                <div  className="w-9/12 ">
                    <div className="py-2">
                        <span className="font-bold">{i.card.info.name}</span>
                        <span>₹{i.card.info.price/100}</span>
                    </div>
                    <p className="font-light text-xs">{i.card.info.description}</p>
                </div>
                <div className="w-3/12  p-4" >
                    <div className="absolute">
                        <button className="bg-black text-white rounded-lg shadow-lg p-2  mx-16" 
                        onClick={()=>handleAddItem(i)}
                         >Add+</button>
                    </div>
                    <img  src={SWIGGY_URL+i.card.info.imageId}></img>
                </div>
                </div>
                ))
            }
            
        </div>
    )
}
export default ItemList;
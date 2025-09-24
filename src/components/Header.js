import {LOGO_URL} from '../utils/constants'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import { useSelector } from 'react-redux'

const Header=()=>{
    const [logBut,setLogBut]=useState("Login")
    const onlineStatus=useOnlineStatus();
    //subscribing to the store using selector
    const cartItems=useSelector((store)=>store.cart.items)
  return  (
    <div className="flex justify-between items-center p-4 bg-orange-400 shadow-md">
        <div className="flex items-center">
            <img className="h-12 w-12 rounded-full" src={LOGO_URL} alt="Logo"></img>
        </div>
        <div className="flex items-center">
            <ul className="flex space-x-6 items-center">
                <li className="text-sm">
                    Online Status: 
                    <span className={`ml-1 ${onlineStatus ? "text-green-500" : "text-red-500"}`}>
                        {onlineStatus ? "online" : "offline"}
                    </span>
                </li>
                <li><Link to={"/"} className="text-gray hover:text-blue-500 transition-colors">Home</Link></li>   
                <li><Link to={"/about"} className="text-gray hover:text-blue-500 transition-colors">About</Link></li> 
                <li><Link to={"/cart"} className="text-gray hover:text-blue-500 transition-colors">Cart({cartItems.length})</Link></li> 
                <li><Link to={"contact"} className="text-gray hover:text-blue-500 transition-colors">Contact Us</Link></li> 
                <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                    onClick={()=>logBut==="Login"?setLogBut("Logout"):setLogBut("Login")}
                >
                    {logBut}
                </button>
            </ul>
        </div>
    </div>
    )
}
export default Header;

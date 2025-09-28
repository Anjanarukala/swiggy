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
    <div className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-gradient-to-r from-orange-400 to-red-400 shadow-lg">
        <div className="flex items-center space-x-3">
            <img className="h-14 w-14 rounded-full border-2 border-white shadow-md" src={LOGO_URL} alt="Logo"></img>
            <h1 className="text-2xl font-bold text-white hidden sm:block">FoodHub</h1>
        </div>
        <div className="flex items-center">
            <ul className="flex space-x-4 lg:space-x-8 items-center">
                <li className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <span className="text-white font-medium">Status:</span>
                    <span className={`ml-1 font-bold ${onlineStatus ? "text-green-200" : "text-red-200"}`}>
                        {onlineStatus ? "🟢 Online" : "🔴 Offline"}
                    </span>
                </li>
                <li><Link to={"/"} className="text-white hover:text-yellow-200 transition-colors font-medium px-3 py-2 rounded-md hover:bg-white/10">Home</Link></li>   
                <li><Link to={"/about"} className="text-white hover:text-yellow-200 transition-colors font-medium px-3 py-2 rounded-md hover:bg-white/10">About</Link></li> 
                <li><Link to={"/cart"} className="text-white hover:text-yellow-200 transition-colors font-medium px-3 py-2 rounded-md hover:bg-white/10 relative">
                    🛒 Cart
                    {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                            {cartItems.length}
                        </span>
                    )}
                </Link></li> 
                <li><Link to={"/contact"} className="text-white hover:text-yellow-200 transition-colors font-medium px-3 py-2 rounded-md hover:bg-white/10">Contact</Link></li> 
                <button 
                    className="bg-white text-orange-500 hover:bg-gray-100 px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
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

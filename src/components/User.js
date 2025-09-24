import { useState } from "react";
const User=({name})=>{
    const [count]=useState(0);
    const [count1]=useState(1)
    return(
        <div className="user-card">
            <h2>count={count}</h2>
            <h2>count1={count1}</h2>
            <h2>Name:{name}</h2>
            <h4>Location: Warangal</h4>
            <p>email:anjanarukala@gmail.com</p>
        </div>
    )
}
export default User;
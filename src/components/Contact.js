import React, { useEffect } from 'react'

const Contact = () => {
  console.log("happens first")
  useEffect(()=>{console.log("side effect")},[]);
  return (
    <div>
        <h2>This is contact page</h2>
        {console.log("component rendered")}
    </div>
  )
}

export default Contact
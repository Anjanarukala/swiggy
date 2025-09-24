import React, { useState } from 'react'
import ItemList from './ItemList'
const RestaurantCategory = ({data,showItems,setShowIndex}) => {
   const accordion=()=>{
        setShowIndex()
   }
  return (
    <div>
        {/*  header */}
        <div className='mb-3 p-3 w-6/12 shadow-lg bg-gray-100 m-auto     rounded-md'>
            <div onClick={accordion} className='flex justify-between cursor-pointer'> 
                <span className='font-bold text-lg  '>{data.title}({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
               { showItems&&<ItemList items={data.itemCards}/>}
           
        </div>
        
    </div>
    
  )
}

export default RestaurantCategory
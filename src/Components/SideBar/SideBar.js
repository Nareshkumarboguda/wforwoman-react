import React, { useState } from 'react'
import './SideBar.css';
import CategoryList from './SideBarList/CategoryList';
import ColorList from './SideBarList/ColorList';
import PriceList from './SideBarList/PriceList';

export default function SideBar({setFilter, filter,handleChange}) {
  const [Category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [color, setColor] = useState("")
  const [isCategory, setIsCategory] =useState(false);
  const [isPrice, setIsPrice] =useState(false);
  const [isColor, setIsColor] =useState(false);
  
// displaying Category List
  const handleCategory = ()=> {
    setIsCategory(!isCategory)
    setCategory( <CategoryList  handleChange={handleChange}/>)
  }
 
 
// displaying Price List
 const handlePrice = ()=> {
    setIsPrice(!isPrice)
    setPrice(<PriceList  handleChange={handleChange}/>)}
 
// displaying Color List 
  const handleColor = ()=> {
    setIsColor(!isColor)
    setColor(<ColorList handleChange={handleChange}/>)
  }
  
  return (
    <div className=" w3-sidebar w3-light-grey w3-bar-block" style={{"width":"20%"}} >

        <h3>Filter</h3>
          <button onClick={handleCategory} className="dropdown-btn">Category</button>
              <div style={{ display: isCategory ? "block" : "none" }}>
                 {Category}
              </div>
          {/* <button  className="dropdown-btn" 
           value="plus_size-Yes" onClick={handleChange}>Plus Size Available</button> */}
            
          <button onClick={handlePrice} className="dropdown-btn">Price</button>
            <div style={{ display: isPrice ? "block" : "none" }}>
              {price}
            </div>
        <button onClick={handleColor} className="dropdown-btn">Color</button>
            <div style={{ display: isColor ? "block" : "none" }}>
              {color}
            </div>

   </div>
  )
}

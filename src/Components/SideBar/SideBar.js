import React, { useState } from 'react'
import './SideBar.css';
import CategoryList from './SideBarList/CategoryList';
import ColorList from './SideBarList/ColorList';
import PriceList from './SideBarList/PriceList';

export default function SideBar({setFilter}) {
  const [Category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [color, setColor] = useState("")
  const [isCategory, setIsCategory] =useState(false);
  const [isPrice, setIsPrice] =useState(false);
  const [isColor, setIsColor] =useState(false);
 
  const handleCategory = ()=> {
    setIsCategory(!isCategory)
    setCategory( <CategoryList setFilter={setFilter}/>)}

  const handlePrice = ()=> {
    setIsPrice(!isPrice)
    setPrice(<PriceList setFilter={setFilter}/>)}
  
  const handleColor = ()=> {
    setIsColor(!isColor)
    setColor(<ColorList setFilter={setFilter}/>)}
  
  return (
    <div className=" w3-sidebar w3-light-grey w3-bar-block" style={{"width":"20%"}} >

        <h3>Filter</h3>
          <button onClick={handleCategory} className="dropdown-btn">Category</button>
              <div>
              {isCategory?Category:null}
              </div>
          <button  className="dropdown-btn" onClick={(e)=>
                        setFilter("plus_size-Yes")}>Plus Size Available</button>
            
          <button onClick={handlePrice} className="dropdown-btn">Price</button>
        <div>
          {isPrice?price:null}
          </div>
        <button onClick={handleColor} className="dropdown-btn">Color</button>
          <div>
          {isColor?color:null}
        </div>

   </div>
  )
}

import React, { useState } from 'react'
import './SideBar.css';

export default function SideBar({setFilter}) {
  const [Category, setCategory] = useState("")
  const [isCategory, setIsCategory] =useState(false);
  

  const handleChange =()=> setFilter("product_category-Kurtas")

  const handleCategory = ()=> {
    setIsCategory(!isCategory)
    setCategory(
  
  <div className='dropdown-btn-list'>
    <input type="checkbox" onChange={handleChange} name="kurta" value="kurta"/>
    <label for="kurta" > Kurta</label><br></br>
    <input type="checkbox" id="tops" names="tops" valuse="tops"/>
   <label for="tops"> Tops</label><br></br>
    <input type="checkbox" id="lips" name="lips" value="lips"/>
    <label for="lips"> Lips</label>
    </div>
  )}
  return (
    <div className=" w3-sidebar w3-light-grey w3-bar-block" style={{"width":"20%"}} >

    <h3>Filter</h3>
   <button onClick={handleCategory} className="dropdown-btn">Category</button>
   <div>
     {isCategory?Category:null}
   </div>
   {/* <button >Category</button> */}
   
   
   </div>
  )
}

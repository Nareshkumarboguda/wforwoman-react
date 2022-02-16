import React from 'react'

export default function ColorList({setFilter}) {

const handleChange =(e)=>{
    if(e.currentTarget.checked){
        setFilter(e.currentTarget.value)
    }else{
        setFilter("")
    }
    
    }


  return (<div className='dropdown-btn-list'>
  <input type="checkbox" onChange={handleChange} name="blue" value="color-Blue"/>
  <label for="kurta" > Blue</label><br></br>

  <input type="checkbox" onChange={handleChange} name="Pink" value="color-Pink"/>
  <label for="kurta" > Pink</label><br></br>

  <input type="checkbox" onChange={handleChange} name="White" value="color-White"/>
  <label for="kurta" > White</label><br></br>

  <input type="checkbox" onChange={handleChange} name="Green" value="color-Green"/>
  <label for="kurta" > Green</label><br></br>

  <input type="checkbox" onChange={handleChange} name="Black" value="color-Black"/>
  <label for="kurta" > Black</label><br></br>

  <input type="checkbox" onChange={handleChange} name="Red" value="color-Red"/>
  <label for="kurta" > Red</label><br></br>

  <input type="checkbox" onChange={handleChange} name="Maroon" value="color-Maroon"/>
  <label for="kurta" > Maroon</label><br></br>

    </div>
  
    )
}



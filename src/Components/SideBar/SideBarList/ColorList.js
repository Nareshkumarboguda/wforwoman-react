import React from 'react'
import './ColorList.css'

export default function ColorList({handleChange}) {




  return (<div className='dropdown-btn-list'>
  <input type="checkbox" onChange={handleChange} name="blue" value="color-Blue" className='checkMark'/>
  <label for="kurta" > Blue</label><br></br>

  <input type="checkbox" onChange={handleChange} name="Pink" value="color-Pink" className='checkMark'/>
  <label for="kurta" > Pink</label><br></br>

  <input type="checkbox" onChange={handleChange} name="White" value="color-White" className='checkMark'/>
  <label for="kurta" > White</label><br></br>

  <input type="checkbox" onChange={handleChange} name="Green" value="color-Green" className='checkMark'/>
  <label for="kurta" > Green</label><br></br>

  <input type="checkbox" onChange={handleChange} name="Black" value="color-Black" className='checkMark'/>
  <label for="kurta" > Black</label><br></br>

  <input type="checkbox" onChange={handleChange} name="Red" value="color-Red" className='checkMark'/>
  <label for="kurta" > Red</label><br></br>

  <input type="checkbox" onChange={handleChange} name="Maroon" value="color-Maroon" className='checkMark'/>
  <label for="kurta" > Maroon</label><br></br>

    </div>
  
    )
}



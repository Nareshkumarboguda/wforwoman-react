import React from 'react'

export default function CategoryList({handleChange}) {




  return (<div className='dropdown-btn-list'>
  <input type="checkbox" onChange={handleChange} name="kurta" value="product_category-Kurtas"/>
  <label for="kurta" > Kurta</label><br></br>
  <input type="checkbox" onChange={handleChange}  names="tops" value="product_category-Tops"/>
 <label for="tops"> Tops</label><br></br>
  </div>
  
    )
}



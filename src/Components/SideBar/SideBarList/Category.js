import React from 'react'

export default function Category() {
  return (
    <div className='dropdown-btn-list'>
    <input type="checkbox" id="kurta"  name="kurta" value="kurta"/>
    <label for="kurta" > Kurta</label><br></br>
    <input type="checkbox" id="tops" names="tops" valuse="tops"/>
   <label for="tops"> Tops</label><br></br>
    <input type="checkbox" id="lips" name="lips" value="lips"/>
    <label for="lips"> Lips</label>
    </div>
  )
}

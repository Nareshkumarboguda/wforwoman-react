import React from 'react'



export default function PriceList({handleChange}) {

        
        
  return (<div className='dropdown-btn-list'>
  <input type="checkbox" name ="Rs.0 to Rs.2000" value="selling_price-Rs.0%20to%20Rs.4000" onChange={handleChange}/>
  <label for="Rs.0 to Rs.2000" >Rs.0 to Rs.2000</label><br></br>

  <input type="checkbox" name ="Rs.2000 to Rs.4000" value="selling_price-Rs.2000%20to%20Rs.4000" onChange={handleChange}/>
 <label for="Rs.2000 to Rs.4000"> Rs.2000 to Rs.4000</label><br></br>
 
 <input type="checkbox" name ="Rs.4000 to Rs.6000" value="selling_price-Rs.4000%20to%20Rs.6000" onChange={handleChange}/>
  <label for="Rs.4000 to Rs.6000" >Rs.4000 to Rs.6000</label><br></br>
 
  <input type="checkbox" name ="Rs6000 to Rs.8000" value="selling_price-Rs.6000%20to%20Rs.8000" onChange={handleChange} />
 <label for="Rs.6000 to Rs.8000"> Rs.6000 to Rs.8000</label><br></br>
 
 <input type="checkbox" name ="Rs.8000 to Rs.10000" value="selling_price-Rs.8000%20to%20Rs.10000" onChange={handleChange}/>
  <label for="Rs.8000 to Rs.10000" >Rs.8000 to Rs.10000</label><br></br>

  </div>
  
    )
}





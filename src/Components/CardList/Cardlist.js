import React,{useEffect, useState} from 'react'
import Card from './Card'
import './CardList.css'

export default function CardList({filteredData}) {
    const [data, setData] = useState([])
    const [isData, setIsData] = useState([])
   

    useEffect(() => {
      console.log(filteredData)
      console.log(`https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=${filteredData}`)
        fetch(`https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=${filteredData}`)
        .then(response=>response.json())
        .then(data=>{
                      setIsData(data.response.error)
                      setData(data.result.products)
                    
                  }).catch((error)=>error)
              
    }, [filteredData])
    
    

  return (
    <div>
      
        {(isData=== "0")?<Card data={data}/>:<div className='no-data-message'>No Items Found</div>}
        
    </div>
    
  )
}



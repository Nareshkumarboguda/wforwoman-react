import React,{useEffect, useState} from 'react'
import Card from './Card'
import './CardList.css'

export default function CardList({filter}) {
    const [data, setData] = useState([])
    const [isData, setIsData] = useState([])
    

    useEffect(() => {
        fetch(`https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=${filter}`)
        .then(response=>response.json())
        .then(data=>{console.log(data.result.products);
                      setIsData(data.response.error)
                      setData(data.result.products)
                    
                  })
    }, [filter])
    
    

  return (
    <div>
        {(isData=== "0")?<Card data={data}/>:<div className='no-data-message'>No Items Found</div>}
        
    </div>
    
  )
}



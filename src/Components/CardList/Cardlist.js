import React,{useEffect, useState} from 'react'
import './CardList.css'

export default function CardList({filter}) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=40&sort_by=&sort_dir=desc&filter=${filter}`)
        .then(response=>response.json())
        .then(data=>{console.log(data.result.products);
                    setData(data.result.products)})
    }, [filter])
    
    

  return (
    <div className='card-list-container'>
       {data.map((data)=><li className='card'><img className='card-img' src={data.image} alt={data.name}/><p> {data.name}</p><p></p></li>)}
    </div>
    
  )
}



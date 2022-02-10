import React,{useEffect, useState} from 'react'
import './CardList.css'

export default function Cardlist() {
    const [data, setData] = useState("")

    useEffect(() => {
        fetch(`https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=`)
        .then(response=>response.json())
        .then(data=> setData(data.result.meta_title))
    }, [])
    

  return (
    <div>
        {data}
        
      <div>{data}</div>
    </div>
    
  )
}

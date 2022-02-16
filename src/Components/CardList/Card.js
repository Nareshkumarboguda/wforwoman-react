import React from 'react';
import './Card.css';

export default function Card({data}) {
  return (
    <div className='card-list-container'>
    {data.map((data,url_key)=><li className='card' key={url_key}><img className='card-img' src={data.image} alt={data.name}/><p> {data.name}</p><p>RS:{data.price}</p></li>)}</div>
  )
}


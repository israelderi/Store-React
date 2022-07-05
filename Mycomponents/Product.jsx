import React from 'react'
import '../App.css';

export default function Product(props) {
  const { OnAdd } = props;
  return (
    <div className='block col-1' >
      {props.id}
      {props.image}
      <h3>{props.name}</h3>
      <div>${props.price}</div>
    </div>
  )
}

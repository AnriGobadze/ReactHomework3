import React from 'react'

export default function Card({info}) {
  return (
    <div className="card">
    <img src={info.image} alt="Product" />
    <div className="card-info">
      <h4>{info.title}</h4>
      <p>{info.description}</p>
      <p><strong>Price:</strong> ${info.price}</p>
      <button className="btn">Add to Cart</button>
    </div>
  </div>

  )
}

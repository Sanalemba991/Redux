import React from 'react'
import { useSelector } from 'react-redux'

function ProductListing() {
    const products=useSelector((state)=>state);
    console.log(products)
  return (
    <div className='ui read container'>
      <h1>Product Listing</h1>
    </div>
  )
}

export default ProductListing

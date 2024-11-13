import React from 'react'
import ProductListing from './ProductListing'

function Header() {
  return (
  <>
    <div className='ui fixed menu'>
      <div className='ui containner centre'>
<h2>Sana Shop</h2>

      </div>
    </div>
    <ProductListing/>
    </>
  )
}

export default Header

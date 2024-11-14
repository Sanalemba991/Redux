import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {selectedProduct} from '../redux/actions/productAction.js'
 
function ProductDetails() {
  const product =useSelector((state)=>state.product);

  const {productId}=useParams();
const dispatch=useDispatch();

  const response = await axios
  .get(`https://fakestoreapi.com/products/${id}`)
  .catch((err) => {
    console.log("Err: ", err);
  });
dispatch(selectedProduct(response.data));
};

  
  return (
    <div>
      <h1>Product Details</h1>
    </div>
  )
}

export default ProductDetails

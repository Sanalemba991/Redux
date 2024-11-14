import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";
import axios from "axios";

function ProductListing() {
  // Assuming 'products' is part of your state, access it like this:
  const products = useSelector((state) => state); // or adjust based on your actual state structure
const dispatch=useDispatch();
  console.log(products);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
     dispatch(setProducts(response.data))
  };

  useEffect(() => {
    fetchProducts();
  }, []); 
  return (
    <div className="sam">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;

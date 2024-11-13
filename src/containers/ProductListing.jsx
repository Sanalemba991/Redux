import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import ProductComponent from "./ProductComponent";

function ProductListing() {
  // Assuming 'products' is part of your state, access it like this:
  const products = useSelector((state) => state); // or adjust based on your actual state structure

  console.log(products);

  return (
    <div className="sam">
<ProductComponent/>

    </div>
  );
}

export default ProductListing;

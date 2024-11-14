import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './ProductComponent.css';  // Importing custom CSS

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="product-card" key={id}>
        <Link to={`/product/${id}`} className="product-link">
          <div className="ui card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="product-list">{renderList}</div>;
};

export default ProductComponent;

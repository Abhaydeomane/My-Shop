import React from 'react';
import './ProductList.css';

const Product = ({ product }) => (
  <div className="product">
    <img src={product.image} alt={product.title} />
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>${product.price}</p>
  </div>
);

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map((product, index) => (
      <Product key={index} product={product} />
    ))}
  </div>
);

export default ProductList;

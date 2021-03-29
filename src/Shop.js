import React from 'react';
import './App.css';
import './Shop.css';
import Product from './Product.js';
import { ProductsArray } from './ProductsArray'

function Shop() {
  const products = ProductsArray()

  return (
    <div className="shop">
      <div className="shop__mask"></div>
      
      
      <div className="shop__container">
        <div className="shop__sidePanel">
        <div className="shop__filterBar">
      </div>

        </div>

        <div className="shop__page">
          <div className="shop__row">
            {products.map(product=>
                  <Product key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      quantity={product.quantity}
                      image={product.image}
                  />
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

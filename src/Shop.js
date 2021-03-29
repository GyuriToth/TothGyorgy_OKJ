import React, { useState } from 'react';
import './App.css';
import './Shop.css';
import Product from './Product.js';
import { ProductsArray } from './ProductsArray'
import { CategoryArray } from './CategoryArray'

function Shop() {
  const products = ProductsArray()
  const category = CategoryArray()

  console.log("kat", category)
  const [selectedCategory, setSelectedCategory] = useState('0')



  return (
    <div className="shop">
      <div className="shop__container">
        
        <div className="shop__sidePanel">
          
          <div className="shop__filterBar">
            <select onChange={e => setSelectedCategory(e.currentTarget.value)}>
              <option value="0">Osszes</option>
              {
                category.map (item =>
                  <option value={item.id}>{item.id}</option>
                )
              }
            </select>
          </div>

        </div>

        <div className="shop__page">
          <div className="shop__row">
            {
              selectedCategory == "0" ?

              
              products.map(product=>
                  <Product key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      quantity={product.quantity}
                      image={product.image}
                  />
              )

            :
              products.filter( item => item.category==selectedCategory ).map(product=>
                <Product key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    quantity={product.quantity}
                    image={product.image}
                />
              )

            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

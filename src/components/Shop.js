import React, { useState } from 'react';
import '../style/App.css';
import Product from './Product.js';
import { ProductArray } from './ProductArray'
import { CategoryArray } from './CategoryArray'

function Shop() {
  const products = ProductArray()
  const category = CategoryArray()

  const [selectedCategory, setSelectedCategory] = useState('0')

  return (
    <div className="shop">
      <div className="shop__container">
        <div className="shop__filterBar">
          <div className="shop__filterBarBox">
            <div className="shop__filterBarBoxRow">
              <label>Kategória:</label>
            </div>

            <div className="shop__filterBarBoxRow">
              <select className="shop__filterSelect" onChange={e => setSelectedCategory(e.currentTarget.value)}>
                <option value="0">Összes</option>
                  {
                    category.map (item =>
                      <option key={item.id} value={item.id}>{item.id}</option>
                    )
                  }
              </select>
            </div>
          </div>
        
      </div>

        <div className="shop__page">
          <div className="shop__row">
            {
              selectedCategory === "0" ?

              products.map(product=>
                <Product 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                  image={product.image}
                  desc={product.desc}
                />
              )
              :
              products.filter( item => item.category===selectedCategory ).map(product=>
                <Product 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    quantity={product.quantity}
                    image={product.image}
                    desc={product.desc}
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

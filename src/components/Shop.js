import React, { useState, useEffect } from 'react';
import '../style/App.css';
import Product from './Product.js';
import { ProductArray } from './ProductArray'
import { CategoryArray } from './CategoryArray'
import { BottomNavigation } from '@material-ui/core';

function Shop() {
  const products = ProductArray()
  const category = CategoryArray()

  const [selectedCategory, setSelectedCategory] = useState('0')
  const [searchKeyWord, setSearchKeyWord] = useState ("")
  const [order, setOrder] = useState ("0")

  useEffect(() => {
    setTimeout(() => {
      setOrder("ascending")
    }, 1500)
  },[])

 const orderByPrice = (e) => {
    setOrder(e);
      products.sort((a,b) => {
          if (order==="ascending"){
            if (a.price > b.price){
              return -1;
            }
            else return 1;
          }
    
          if (order==="descending"){
            if (a.price < b.price){
              return -1;
            }
            else return 1;
          }
      })
    console.log("termekek", products);
  }

  return (


    <div className="shop">
      <div className="shop__container">
        <div className="shop__filterBar">
          <div className="shop__filterBarBox">
            <div className="shop__filterBarBoxRow">
              <div className="shop__filterItem">Kategória:</div>
              <div className="shop__filterItem">Rendezés:</div>
              <div className="shop__filterItem">Keresés:</div>
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
              <select value={order} className="shop__filterSelect" onChange={(e) => orderByPrice(e.target.value)}>
                <option value="ascending">Ár szerint növekvő</option>
                <option value="descending">Ár szerint csökkenő</option>
              </select>
              <input type="text" className="shop__filterSearch" onChange={(e) => setSearchKeyWord(e.currentTarget.value)}></input>
            </div>
          </div>
        
      </div>

        <div className="shop__page">
          <div className="shop__row">
            {
              selectedCategory === "0" ?
              
              (
                searchKeyWord === "" ?
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
                  (
                    products.filter( item => item.title.toUpperCase().includes(searchKeyWord.toUpperCase()) ).map(product=>
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
                  )
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

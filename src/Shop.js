import React from 'react';
import './App.css';
import './Shop.css';
import Product from './Product.js';

function Shop() {

  return (
    <div className="shop">
      <img className="shop__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner"/>
      
      <div className="shop__row">
        <Product
          id="123456789"
          title="Test Item"
          price={1000}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/71TnVZ-xTYL._AC_SY450_.jpg"
        />
        <Product
          id="123456789"
          title="Test Item"
          price={70000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71TnVZ-xTYL._AC_SY450_.jpg"
        />
        <Product
          id="123456789"
          title="Test Item"
          price={30000}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71TnVZ-xTYL._AC_SY450_.jpg"
        />
        <Product
          id="123456789"
          title="Test Item"
          price={1000}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/71TnVZ-xTYL._AC_SY450_.jpg"
        />
        <Product
          id="123456789"
          title="Test Item"
          price={1000}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/71TnVZ-xTYL._AC_SY450_.jpg"
        />
        <Product
          id="123456789"
          title="Test Item"
          price={1000}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/71TnVZ-xTYL._AC_SY450_.jpg"
        />
        
      </div>

      <div className="shop__row">
        <Product
          id="123456789"
          title="Test Item"
          price={1000}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/71TnVZ-xTYL._AC_SY450_.jpg"
        />
        <Product
          id="123456789"
          title="Test Item"
          price={70000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71TnVZ-xTYL._AC_SY450_.jpg"
        />
        <Product
          id="123456789"
          title="Test Item"
          price={30000}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71TnVZ-xTYL._AC_SY450_.jpg"
        />
      </div>
    </div>
  );
}

export default Shop;

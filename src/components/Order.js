import React from 'react'
import { useStateValue } from '../StateProvider'
import { FormInput } from './Message'
import '../style/App.css'

import { Link } from 'react-router-dom'


export const Order=()=>{
    const [{basket}]=useStateValue()


    const getCartTotal=(basket)=>basket?.reduce((tot,item)=>item.price*item.quantity+tot,0)

    return(
        <div className="order">
          <h1>Összefoglaló</h1>
          {
          [...basket].sort((a,b)=>a.id>b.id ? 1:-1).map(item=>
            <div className="order__row">
              <div className="order__img">
                <img src={item.image} alt="" height="100%"/>
              </div>

              <div className="order__info">
                <div className="order__infoTitle">
                  <strong>{item.title}</strong>
                </div>

                <div>
                  {item.price} Ft
                </div>

                <div>
                  {item.quantity} darab
                </div>

                <div>
                  Összesen: {item.price*item.quantity} Ft
                </div>
              </div>
            </div>

          )
          }
          <Link to="/checkout">
            <button className="order__backToCheckout">Vissza a kosárhoz</button>
          </Link>
  
          <div className="order__summary"><p>Rendelés összege: {getCartTotal(basket)} Ft</p></div>

          <div className="order__form">
            <FormInput/>
          </div>
        </div>
    )
}
import React from 'react'
import { useStateValue } from '../StateProvider'
import { FormInput } from './Message'
import '../style/App.css'

import { Link } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'


export const Order=()=>{
    const [{basket}]=useStateValue()
    const getCartTotal=(basket)=>basket?.reduce((tot,item)=>item.price*item.quantity+tot,0)

    return(
        <div className="order">
          <h1>Összefoglaló</h1>
          {
          [...basket].sort((a,b)=>a.id>b.id ? 1:-1).map(item=>
            <div key={item.id} className="order__row">
              <div className="order__img">
                <img src={item.image} alt="" height="100%"/>
              </div>

              <div className="order__info">
                <div className="order__infoTitle">
                  <strong>{item.title}</strong>
                </div>

                <strong>
                  <CurrencyFormat
                    renderText={(value) => (
                      <p>{value}<small>Ft</small></p>
                    )}
                    value={item.price}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </strong>

                <div>
                  {item.quantity} darab
                </div>

                <div>
                <CurrencyFormat
                  renderText={(value) => (
                    <p>Összesen: {value}<small>Ft</small></p>
                  )}
                  value={item.price*item.quantity}
                  displayType={"text"}
                  thousandSeparator={true}
                />
                </div>
              </div>
            </div>

          )
          }
          <Link to="/checkout">
            <button className="order__backToCheckout">Vissza a kosárhoz</button>
          </Link>
  
          <div className="order__summary">
            <CurrencyFormat
              renderText={(value) => (
                <strong>Rendelés összege: {value}<small>Ft</small></strong>
              )}
              value={getCartTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>
          <FormInput/>
        </div>
    )
}
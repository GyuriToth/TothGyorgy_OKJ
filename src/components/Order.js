import React from 'react';
import { useStateValue } from '../StateProvider';
import { FormInput } from './Message'


export const Order=()=>{
    const [{basket}]=useStateValue()


    const getCartTotal=(basket)=>basket?.reduce((tot,item)=>item.price*item.quantity+tot,0)

    return(
        <div>
          <h1>Összefoglaló</h1>
          {
          [...basket].sort((a,b)=>a.id>b.id ? 1:-1).map(item=>
            <div>
              {
                /*<div className=''>{item.id}</div>*/
              }
              <div>{item.title}</div>
              <div>{item.price}</div>
              <div>{item.quantity}</div>
              <div><img src={item.image} alt="" width='50'/></div>
              <div>ár: {item.price*item.quantity} Ft</div>
            </div>

          )
          }
          <div className=''>Rendelés összege: {getCartTotal(basket)} Ft</div>

          <FormInput/>
        </div>
    )
}
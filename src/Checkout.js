import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import ProductCart from './ProductCart'

function Checkout (){
    
    const [{basket}] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout__left">
            
            {
                basket.length == 0 ? (
                    <div>
                        <h2 className="checkout__title">Your Shopping basket is empty.</h2>
                        <p>You have no items in your basket.</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="shoppingbaskettitle">Items in the Basket </h2>
                        {
                             [...basket].sort((a,b)=>a.id>b.id ? 1:-1).map(item=>(
                                <ProductCart
                                    id={item.id}
                                    title={item.title}
                                    img={item.img}
                                    price={item.price}
                                    quantity={item.quantity}
                                 />
                             ))
                        }
                    </div>
                )
            }
                
            </div>
                {
                    basket.length > 0 && (
                        <div className="checkout__right">
                            <Subtotal/>
                        </div>
                    )
                }
        </div>
    )
}

export default Checkout;
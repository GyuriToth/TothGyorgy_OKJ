import React from 'react'
import '../style/App.css'
import { useStateValue } from '../StateProvider'
import Subtotal from './Subtotal'
import ProductCart from './ProductCart'

function Checkout (){
    
    const [{basket}] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout__left">
            
            {
                basket.length === 0 ? (
                    <div>
                        <h2 className="checkout__title">A kosár üres.</h2>
                    </div>
                ) : (
                    <div>
                        <h2 className="shoppingbaskettitle">Kosár tartalma:</h2>
                        {
                             [...basket].sort((a,b)=>a.id>b.id ? 1:-1).map(item=>(
                                <ProductCart
                                    key={item.key}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
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
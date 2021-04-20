import React from 'react'
import '../style/App.css'
import { useStateValue } from '../StateProvider'
import Subtotal from './Subtotal'
import ProductCart from './ProductCart'

import { Link } from 'react-router-dom'

function Checkout (){
    
    const [{basket}] = useStateValue();
    
    return (
        <div className="checkout">
            <h2 className="checkout__title">Kosár tartalma:</h2>
            {
                basket.length === 0 ? (
                    <div className="checkout__cartEmpty">
                        <h2>A kosár üres.</h2>
                        <Link to="/shop">
                            <button className="checkout__shopButton">Vissza az áruházhoz</button>
                        </Link>
                    </div>
                ) 
                : 
                (
                    <div className="checkout__container">
                        <div className="checkout__products">
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
                        <div className="checkout__subtotal">
                            <Subtotal/>
                        </div>
                    </div>
                )
            }
                                
        </div>
    )
}

export default Checkout;
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom'

import '../style/App.css'

function Subtotal(){
    
    const getCartTotal = (basket) => 
    basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

    const [{basket}] = useStateValue();
    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <p>
                        Részösszeg: ({basket.length}db termék): <strong>{`${value}`} Ft</strong>
                    </p>
                )
                }
            value={getCartTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            />
            <div className="subtotal__buttonContainer">
                <Link to="/order" className="subtotal__button">
                    Tovább a rendeléshez
                </Link>
            </div>
        </div>
    )
}

export default Subtotal;
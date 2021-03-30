import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom'

function Subtotal(){
    
    const getCartTotal = (basket) => 
    basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

    const [{basket}, dispatch] = useStateValue();
    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <p>
                        Subtotal({basket.length} items) : <strong>{`${value}`}</strong>
                    </p>
                )
                }
            value={getCartTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <Link to="/order">Rendelés</Link>
        </div>
    )
}

export default Subtotal;
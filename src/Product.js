import react from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import StarIcon from '@material-ui/icons/Star';

function Product({id,title,image,price,rating}){
    
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        let index = basket.findIndex((item) => item.id == id);
        if (index == -1){
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                    quantity: 1
                }  
            })
        }
        else {
            let qty = basket[index].quantity;
            dispatch ({
                type: 'MODIFY_QUANTITY',
                id: id,
                qty: qty,
            })
        }
        
        
    }

    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p><StarIcon style={{fill: "gold"}}/></p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Kosárba</button>
        </div>
    )
}

export default Product;
import '../style/App.css'
import { useStateValue } from '../StateProvider'
import { useState } from 'react'

import ReactCardFlip from 'react-card-flip'

function Product({id, title, image, price, desc}){
    
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        let index = basket.findIndex((item) => item.id === id);
        if (index === -1){
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    quantity: 1,
                    desc: desc
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

    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return(
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            {
                <div className="product">
                    <div className="product__info">
                        <p>{title}</p>
                        <p className="product__price">
                            <strong>{price}</strong>
                            <small> Ft</small>
                        </p>
                    </div>
                    <img src={image} alt="" />
                    <button onClick={addToBasket}>Kosárba</button>
                    <button onClick={handleClick} className="product__description" >Részletek</button>
                </div>
            }

            {
                <div className="product">
                <div className="product__info">
                    <p>
                        {desc}
                    </p>
                </div>
                <img src={image} alt="" />
                <button className="product__description" onClick={handleClick}>Vissza</button>
            </div>
            }
        </ReactCardFlip>

        
    )
}

export const ProductRow = ({title, desc, image, price,key}) => {
    const removeProduct = (id) => {
        console.log('Termek id:', key)
    }

    return (
        <div className="productRow">
            <br/>
            <h2>Adatbázisban szereplő termékek:</h2>
            <img src={image} className="productRow__Img"/>
            <div className="productRow__Title">{title}</div>
            <div className="productRow__Text">{desc}</div>
            <div className="productRow__Text">{price}</div>
            <button onClick={removeProduct()}>Delete me;)</button>
        </div>
    )
}

export default Product
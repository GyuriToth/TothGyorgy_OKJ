import '../style/App.css'
import { useStateValue } from '../StateProvider'
import { useState } from 'react'
import firebase from 'firebase'

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

export const ProductRow = ({title, desc, image, price, id}) => {
    //console.log(id)

    const removeProduct = (e) => {
        e.preventDefault()
            firebase
                .firestore()
                .collection('products').doc(id)
                .delete()
                .then(() => {
                    console.log("Document successfully deleted!");
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
    }

    return (
        <div className="productRow">
            <div className="productRow__img">
                <img src={image} alt=""/>
            </div>
            <div className="productRow__info">
                <div className="productRow__Title">
                    <strong>{title}</strong>
                </div>
                <div className="productRow__Text">{desc}</div>
                <div className="productRow__Text">{price}</div>
                <button onClick={removeProduct}>Delete me;)</button>
            </div>
        </div>
    )


}

export default Product
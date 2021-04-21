import React, { useState } from 'react'
import firebase from 'firebase'
import '../style/App.css'

import { CategoryArray } from './CategoryArray'
import { ProductRow } from './Product'
import { ProductArray } from './ProductArray'

export const Admin=()=>{
    const products = ProductArray()

    const categories = CategoryArray()

    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('')
    const [desc,setDesc] = useState('')
    const [photoUrl,setPhotoUrl] = useState(null)
    const [userCategory, setUserCategory]  = useState('')

    const onFileChange=async(e)=>{
        const file=e.target.files[0]
        const storageRef=firebase.storage().ref()
        const fileRef=storageRef.child(file.name)
        await fileRef.put(file)
        setPhotoUrl(await fileRef.getDownloadURL())
    }

    const onsubmit=(e)=>{
        e.preventDefault()
        firebase
            .firestore()
            .collection('products')
            .add({
                title,
                desc,
                price: parseInt(price),
                image: photoUrl,
                category: userCategory
            })
    }

    return(
        <React.Fragment>
            <div className="admin">
            <h4>Új termék bevezetése</h4>
                <form onSubmit={onsubmit}>
                    <div className="admin__row">
                        <div className="admin__label">Termék neve:</div>
                        <input type='text' value={title} onChange={(e=>setTitle(e.currentTarget.value))}/>
                    </div>
                    <div className="admin__row">
                        <div className="admin__label">Kategória</div>
                        <select id="ktg" onChange={e => setUserCategory(e.currentTarget.value)}>
                            <option value="0">Válassz kategóriát!</option>
                                {
                                    categories.map (item =>
                                        <option value={item.id}>{ item.id }</option>
                                    )
                                }
                        </select>
                    </div>

                    <div className="admin__row">
                        <div className="admin__label">Leírása:</div>
                        <input type='text' value={desc} onChange={(e=>setDesc(e.currentTarget.value))}/>
                    </div>
                    <div className="admin__row">
                        <div  className="admin__label">Fotó:</div>
                        <input type='file' onChange={onFileChange}/>
                    </div>
                    <div className="admin__row">
                        <div className="admin__label">Termék ára:</div>
                        <input type='number' value={price} onChange={(e=>setPrice(e.currentTarget.value))}/>
                    </div>
                    <div>
                        <button type='submit'>Mentés</button>
                    </div>
                    
                    <br/>
                    <h2>Adatbázisban szereplő termékek:</h2>
                    {
                        products.map(product=>
                            <ProductRow className="admin__productRow"
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                desc={product.desc}
                            />
                        )
                    }

                </form>
            </div>
        </React.Fragment>
    )
}
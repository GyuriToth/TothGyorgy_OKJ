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
    const [category, setCategory]  = useState('')

    //var product_query = db.collection('products').where(id,'==', product_id);

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
                category: category
            })
    }

    return(
        <React.Fragment>
            <h4>Új termék bevezetése</h4>
            <form onSubmit={onsubmit}>
                <div>
                    <label>Termék neve:</label>
                    <input type='text' value={title} onChange={(e=>setTitle(e.currentTarget.value))}/>
                </div>
                <div>
                    <label>Kategória</label>
                    <select onChange={e => setCategory(e.currentTarget.value)}>
                        <option value="0">Válassz kategóriát!</option>
                            {
                                categories.map (item =>
                                    <option value={category}>{ item.id }</option>
                                )
                            }
                    </select>
                </div>

                <div>
                    <label>Leírása:</label>
                    <input type='text' value={desc} onChange={(e=>setDesc(e.currentTarget.value))}/>
                </div>
                <div>
                    <label>Fotó:</label>
                    <input type='file'  onChange={onFileChange}/>
                </div>
                <div>
                    <div>
                         <label>Termék ára:</label>
                        <input type='number' value={price} onChange={(e=>setPrice(e.currentTarget.value))}/>
                    </div>
                </div>
                <div>
                    <button type='submit'>Mentés</button>
                </div>
                
                <br/>
                <h2>Adatbázisban szereplő termékek:</h2>
                {
                    products.map(product=>
                        <ProductRow 
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
        </React.Fragment>
    )
}
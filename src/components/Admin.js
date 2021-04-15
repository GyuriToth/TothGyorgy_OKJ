import React, { useState } from 'react'
import firebase from 'firebase'

import { CategoryArray } from './CategoryArray'

export const Admin=()=>{
    const categories = CategoryArray()

    const [title,setTitle]=useState('')
    const [price,setPrice]=useState('')
    const [desc,setDesc]=useState('')
    const [photoUrl,setPhotoUrl]=useState(null)
    const [category, setCategory] =useState('')

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
            <h4 className=''>Új termék bevezetése</h4>
            <form className='' onSubmit={onsubmit}>
                <div className=''>
                    <label>Termék neve:</label>
                    <input className='' type='text' value={title} onChange={(e=>setTitle(e.currentTarget.value))}/>
                </div>
                <div>
                    <label>Kategória</label>
                    <select className="shop__filterSelect" onChange={e => setCategory(e.currentTarget.value)}>
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
                
            </form>
        </React.Fragment>
    )
}
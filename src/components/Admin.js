import React, { useState } from 'react';
import firebase from 'firebase'

export const Admin=()=>{
    const [title,setTitle]=useState('')
    const [price,setPrice]=useState('')
    //const [quantity,setQuantity]=useState('')
    const [description,setDescription]=useState('')
    const [photoUrl,setPhotoUrl]=useState(null)

    const onFileChange=async(e)=>{
        const file=e.target.files[0]
        const storageRef=firebase.storage().ref() 
        //const fName=document.getElementById('value')
        //const extensionType=file.name.slice(file.name.search('.'))
        //console.log(fName+'.'+extensionType)
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
                description,
                price:parseInt(price),
                //quantity:parseInt(quantity),
                image:photoUrl
            })
    }

    return(
        <React.Fragment>
            <h4 className='text-center text-success'>Új termék bevezetése</h4>
            <form className='form border p-2 border-success text-success' onSubmit={onsubmit}>
                <div className='form-group'>
                    <label>Termék neve:</label>
                    <input className='form-control' type='text' value={title} onChange={(e=>setTitle(e.currentTarget.value))}/>
                </div>
                <div className='form-group'>
                    <label>Leírása:</label>
                    <input className='form-control' type='text' value={description} onChange={(e=>setDescription(e.currentTarget.value))}/>
                </div>
                <div className='form-group'>
                    <label>Fotó:</label>
                    <input className='form-control' type='file'  onChange={onFileChange}/>
                </div>
                <div className='row'>
                    <div className='col-4'>
                         <label>Termék ára:</label>
                        <input className='form-control' type='number' value={price} onChange={(e=>setPrice(e.currentTarget.value))}/>
                    </div>
                    {/*
                    <div className='col-4'>
                        <label>Darab:</label>
                        <input className='form-control' type='number' value={quantity} onChange={(e=>setQuantity(e.currentTarget.value))}/>
                    </div> 
                    */}
                </div>
                <div className="row mt-2 mb-2 justify-content-center">
                    <button className='w-25  btn btn-outline-success' type='submit'>  Mentés</button>
                </div>
                
            </form>
        </React.Fragment>
    )
}
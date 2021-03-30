import firebase from 'firebase'
import React, { useEffect, useState } from 'react';

export const CategoryArray=()=>{
    const [category, setCategory]=useState([])

    useEffect(()=>{
        const unSubscribe=firebase
            .firestore()
            .collection('category')
            .onSnapshot((snapshot)=>{
                const newCategory=snapshot.docs.map((doc)=>({
                    id:doc.id,
                    ...doc.data()
                }))
                setCategory(newCategory)
            })
        return ()=>unSubscribe()
    },[])
    return category
}
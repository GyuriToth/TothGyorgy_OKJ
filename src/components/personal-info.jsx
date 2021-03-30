import React, { useState } from 'react'
import '../Profile.css'
import firebase from '../firebase'
import { useStateValue } from '../StateProvider'

const PersonalInfoForm = () => {
    const [{loggedinuser}, dispatch] = useStateValue();

    const [name, setName] = useState('')
    const [birthday, setBirthDay] = useState('')
    const [deliveryName, setDeliveryName] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState ('')
    var db = firebase.firestore()


    function onSubmit(e) {
        e.preventDefault()
        db.collection('userInformation').doc(loggedinuser.email).update({
            name: name,
            birthday: birthday
        })
    }

    return (
        <div className="profile__optionContainer">
            <form onSubmit={onSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">Személyes Adatok</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Teljes Név</td>
                            <td><input type="text" value={name} onChange={e => setName(e.currentTarget.value)}></input></td>
                        </tr>
                        <tr>
                            <td>Születési Dátum</td>
                            <td><input type="date" value={birthday} onChange={e => setBirthDay(e.currentTarget.value)}></input></td>
                        </tr>
                        <tr>
                            <td>E-mail</td>
                            <td>{loggedinuser?.email}</td>
                        </tr>
                        <tr>
                            <td colSpan="2"><hr/></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Szállítási adatok</td>
                        </tr>
                        <tr>
                            <td>Szállítási Név</td>
                            <td><input type="text" value={deliveryName} onChange={e => setDeliveryName(e.currentTarget.value)}></input></td>
                        </tr>
                        <tr>
                            <td>Irányítószám</td>
                            <td><input type="number" value={postalCode} onChange={e => setPostalCode(e.currentTarget.value)}></input></td>
                        </tr>
                        <tr>
                            <td>Település</td>
                            <td><input type="text" value={city} onChange={e => setCity(e.currentTarget.value)}></input></td>
                        </tr>
                        <tr>
                            <td>Utca, házszám</td>
                            <td><input type="text" value={address} onChange={e => setAddress(e.currentTarget.value)}></input></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><button type="submit">Nyomj meg</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default PersonalInfoForm;
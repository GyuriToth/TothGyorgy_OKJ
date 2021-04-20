import React, { useState } from "react"
import emailjs, { init } from 'emailjs-com'
import '../style/App.css'

export const FormInput=()=>{

    const [name, setName] = useState("");
    const [email,setEmail]=useState("");
    const [postalcode, setPostalCode] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")

    init("user_r58oau2P3M6CZnJwdzPaa");
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID

    const templateParams = {
        userName: name,
        userEmail: email,
        postalcode: postalcode,
        city: city,
        address: address
    }
    emailjs.send(serviceId, templateId, templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
  }
  return (
    <div className="order__formContainer">
        <div className="order__form">
            <center><h4>Rendelési adatok</h4></center>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">*Név </label>
                    <input type="text" placeholder="név" value={name} onChange={e => setName(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="email">*E-mail </label>
                    <input type="email" id="email" required placeholder="e-mail cím" value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="postalcode">*Irányítószám </label>
                    <input type="number" id="postalcode" required placeholder="irányítószám" value={postalcode} onChange={e=>setPostalCode(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="city">*Város </label>
                    <input type="text" id="city" required placeholder="város" value={city} onChange={e=>setCity(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="address">*Utca, házszám </label>
                    <input type="text" id="lakcim" required placeholder="lakcím" value={address} onChange={e=>setAddress(e.target.value)}/>
                </div>
                <br/>
                <center><input className="order__button" type="submit" value="Rendelés véglegesítése" /></center>      
            </form>
        </div>
    </div>
  );
}

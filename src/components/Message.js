import React, { useState } from "react"
import emailjs, { init } from 'emailjs-com'
import '../style/App.css'

export const FormInput=()=>{

    const [name, setName] = useState("");
    const [email,setEmail]=useState("");
    init("user_r58oau2P3M6CZnJwdzPaa");
  

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID

    const templateParams = {
        userName: name,
        userEmail: email
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
    <div>
    <div>
        <br/>
        <h4>Rendelési adatok</h4> 
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">*Név </label>
                <input type="text" placeholder="név" value={name} onChange={e => setName(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="email">*E-mail </label>
                <input type="email" id="email" required placeholder="e-mail cím" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <input type="submit" value="Rendelés megerősítése" />           
        </form>
        </div>
    </div>
  );
}

import React, { useState } from "react";
import emailjs, { init } from 'emailjs-com';

export const FormInput=()=>{
  const [name, setName] = useState("");
  const [email,setEmail]=useState("");
  const [html,setHtml]=useState("")
  init("user_r58oau2P3M6CZnJwdzPaa");
  

  const handleSubmit = (evt) => {
    setHtml('<h1>Hello</h1>')

    evt.preventDefault();
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID

    console.log(serviceId)
    const templateParams = {
        userName: name,
        html: html,
        userEmail: email
    }
    emailjs.send('tothgyorgy_service', 'tothgyorgy_template', templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
  }
  return (
    <div>
    <div><h4 className="">Jelentkezés</h4> 
        <form onSubmit={handleSubmit}>
            
            <div className="">
                <label htmlFor="name">*Név</label>
                <input type="text" className="" placeholder="név" value={name} onChange={e => setName(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">*E-mail</label>
                <input type="email" id="email" className="" required placeholder="e-mail cím" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <input className="" type="submit" value="Jelentkezés beküldése" />
        </form>
        </div>
    </div>
  );
}

import React, { useState, useEffect} from 'react'
import firebase from '../firebase'

function useSettings () {
    const [settings, setInformation] = useState([])

        useEffect(()=> {
        firebase
            .firestore()
            .collection('data')
            .onSnapshot((snapshot) => {
                const newSettings = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }))

                setInformation(newSettings)
            })
    }, [])

    return settings
}

const UserSettings = () => {
    const settings = useSettings()

    return (
        <div>
            <h2>User Settings</h2>
            <div>
                <label>Sort By:</label>
                <select>
                    <option>City</option>
                    <option>Street</option>
                    <option disabled>---</option>
                    <option>Name (a-z)</option>
                    <option>Name (z-a</option>
                </select>
            </div>
            <ol>
                {settings.map( (data) => 
                    <li key={data.id}>
                        <div className="city-entry">
                            {data.city}
                            <code className="city"> {data.street}</code>
                        </div>
                    </li>
                )}
            </ol>
        </div>
    )

}

export default UserSettings;
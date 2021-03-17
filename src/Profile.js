import React from "react"
import './App.css'
import './Profile.css'

import PersonalInfoForm from './components/personal-info'

function Profile () {
    return (
        <div className="profile">
            <div className="profile__title">
                <h1>Beállítások</h1>
                <hr/>
            </div>

            <div className="profile__container">
                <div className="profile__nav">
                    <div className="profile__navRow">
                        <h3>Személyes Adatok</h3>
                    </div>
                </div>

                <div className="profile__settings">
                    <PersonalInfoForm/>
                </div>
            </div>
        </div>
    )
}

export default Profile;
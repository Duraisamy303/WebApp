import React from 'react'
import Gift from '../Images/gift.jpg'
import Bday from '../Images/bday.jpg'
import './RightBar.css'
import {Users} from '../DummyData'
import Online from '../online/Online'

export default function Rightbar() {
    

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdatContainer">
                    <img src={Gift} className="birthdayImg" alt="" />
                    <span className="birthdayText">
                        <b>Ajith</b> and <b>3 other friends </b> have a birthday today
                    </span>
                </div>
                <img src={Bday} className="rightbarAd" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u)=>(
                        <Online key={u.id} user={u} />
                    ))}
                    
                </ul>

            </div>
            
        </div>
    )
}

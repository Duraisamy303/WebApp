import React from 'react'
import './online.css'
import RightImgProfile from "../Images/IMG_20200309_142233.jpg"

function Online({user}) {
    return (
        <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
           <img src={RightImgProfile} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    </li>
    )
}

export default Online

import React from 'react'
import './closeFriend.css'
import Logo from "../Images/logo1.jpg"
export default function CloseFriend() {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={Logo} alt=""></img>
            <span className="sidebarFriendName">Durai samy</span>
        </li>
    )
}

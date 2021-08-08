import React from 'react'
import './Topbar.css'
import { Search, Person,Chat,Notifications } from '@material-ui/icons'
import Logo1 from "../Images/logo2.jpg"

export default function Topbar(props) {


    return (
        <>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className="logo">ViniMix</span>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <Search  className="searchIcon"/>
                        <input placeholder="Search for friend, post or video" className="searchInput" />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <Person />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <Chat />
                            <span className="topbarIconBadge">2</span>
                        </div>
                        <div className="topbarIconItem">
                            <Notifications />
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </div>
                    <img src={Logo1}  alt="" className="topbarImg" />
                </div>
            </div>
        </>
    )
}

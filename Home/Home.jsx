import React from 'react'
// import {Person} from '@material-ui/icons'
import Topbar from '../TopBar/Topbar.js'
import Sidebar from '../Sidebar/Sidebar.jsx'
import Rightbar from '../RightBar/RightBar.jsx'
import Feed from '../Feed/Feed.jsx'
import "./Home.css"


export default function Home(props) {
    

    return (
        <>
           
        <Topbar />
        <div className="homeContainer">
            <Sidebar />
            <Feed />
            <Rightbar />
        </div>
        </>
    )
}

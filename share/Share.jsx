import React from 'react'
import Logo from "../Images/2019-04-02-16-54-20-987.jpg"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"
import "./Share.css"

export default function Share(props) {


    return (
        <>
            <div className="share">
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img src={Logo} className="shareProfileImg" alt="" />
                        <input placeholder="What's in your mind Dude?" className="shareInput" />
                    </div>
                    <hr className="shareHr" />
                    <div className="shareBottom">
                        <div className="shareOptions">
                            <div className="shareOption">
                                <PermMedia htmlColor="tomato" className="shareIcon" />
                                <span className="shareOptionText"> Photo or Video </span>

                            </div>
                            <div className="shareOption">
                                <Label htmlColor="blue" className="shareIcon" />
                                <span className="shareOptionText"> Tag </span>

                            </div>
                            <div className="shareOption">
                                <Room htmlColor="green" className="shareIcon" />
                                <span className="shareOptionText"> Location </span>

                            </div>
                            <div className="shareOption">
                                <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                                <span className="shareOptionText"> Feelings </span>

                            </div>

                        </div>
                        <button className="shareButton">Share</button>
                    </div>

                </div>
            </div>
        </>
    )
}

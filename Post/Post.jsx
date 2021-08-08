import React from 'react'
import './Post.css'
import Logo from '../Images/FB_IMG_15535939933159431.jpg'
import Logo1 from '../Images/logo1.jpg'
import Like from '../Images/like1.png'
import Heard from '../Images/heard.png'
import {MoreVert} from "@material-ui/icons"
import {Users} from "../DummyData"

export default function Post({post}) {

    return (
        <div className="post">
            <div className='postWrapper'>
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Logo} />
                        <span className="postusername">
                            {Users.filter((u)=>u.id === post?.userId)[0].username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={Logo} className="postImg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                       <img className="likeIcon" src={Like} alt="" />
                       <img className="likeIcon" src={Heard} alt="" />
                       <div className="postLikeCounter">{post.like} people like it</div>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

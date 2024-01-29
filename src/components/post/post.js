import React from "react"
import "./post.css"
import Img1 from "/assets/person/1.jpeg"
import Img2 from "/assets/post/1-(1).jpeg"
import Like from "/assets/like.png"
import Heart from "/assets/heart.png"
import { MoreVert, CommentRounded } from "@mui/icons-material"
import {Users} from "/src/constant/users"
import { useState } from "react"
export default function Post({post}){
    const Im=Users.filter((u) => u.id == post?.userId)[0]?.profilePicture
    const [like, setLike]= useState(post.like)
    const [islike, setIslike]= useState(false)
    const likeHandler=()=>{
        setLike(islike?like-1:like+1)
        setIslike(!islike)
    }
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postUpper">
                    <div className="postLeft">
                        <img src={Im} alt="" className="postImg" />
                        <span className="postUsername">{Users.filter((u) => u.id == post?.id)[0]?.username}</span>
                        <span className="postTime"> {post?.date}</span>
                    </div>
                    <div className="postRight"><MoreVert/></div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postContent" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={Like} alt="" onClick={likeHandler} className="postButtonlike" />
                        <img src={Heart} alt="" onClick={likeHandler} className="postButtonHeart" />
                        <span className="postCounter">{like} people like it!</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentIcon"><CommentRounded/></span>
                        <div className="postComment">{post?.comment} Comment</div>
                    </div>
                </div>
            </div>
        </div>
    )
}



    // const user= Users.filter(u=>u.id===1)
    // console.log(user[0].username)
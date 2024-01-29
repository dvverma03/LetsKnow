import React from "react"
import "./feed.css"
import Share from "/src/components/share/share"
import Post from "/src/components/post/post"
import {Posts} from "/src/constant/post"

export default function Feed(){
    return(
     <div className="feed">
        <div className="feedwrapper">
            <Share/>
            {Posts.map((p)=>(
                <Post key={p.id} post={p}/>
            ))}
        </div>
     </div>
    )
}
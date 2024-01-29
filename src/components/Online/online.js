import "./online.css"

import Online from "/assets/person/4.jpeg"
export default function Online({user}){
    return(

        <li className="rightbarFriend">
              <div className="rightbarFriendContainer">
                <img src={user?.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
                <span className="rightbarProfileName">{user?.username}</span>
            </li>
    )
}
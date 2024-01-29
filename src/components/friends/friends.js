export default function Friends({user}){
    return(
        <li className="sidebarfriend">
                    <img src={user.profilePicture} className="sidebarfrindImg" alt="" />
                    <span className="sidebarfriendName">{user.username}</span>
                </li>
    )
}
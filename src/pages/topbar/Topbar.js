import {Search, Person,Notifications, Message } from "@mui/icons-material";
import "./topbar.css"
import personImage from "/assets/person/1.jpeg";
import { Link } from "react-router-dom";

export default Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="topbarLogo">Lets Know</span>
      </div>
      <div className="topbarCenter">
        <div className="topbarSearch">
          <Search className="searchIcon"/>
          <input
            placeholder="Find your friends,video,photos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
            <span className="topbarLink1"><Link className="Link" to="/">Home</Link></span>
            <span className="topbarLink2"><Link className="Link" to="/profile">Profile</Link></span>
            <span className="topbarLink3"><Link className="Link" to="/login">Login</Link></span>
        </div>
        <div className="topbarIcon">
          <div className="topbarIconItem"><Person/><span className="topbarIconBadge">1</span></div>
          <div className="topbarIconItem"><Notifications/><span className="topbarIconBadge">3</span></div>
          <div className="topbarIconItem"><Message/><span className="topbarIconBadge">2</span></div>
        </div>
        <Link to="/profile"><img src={personImage} alt="Some description" className="topbarImg"  /></Link>
      </div>
    </div>
  )
}

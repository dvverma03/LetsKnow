import React from "react"
import "./rightbar.css"
import Img1 from "/assets/gift.png"
import img from "/ad.png"
import Online from "/src/components/Online/online"
import { Users } from "../../constant/Users"
import Img3 from "/assets/person/5.jpeg"
import Img4 from "/assets/person/6.jpeg"
import Img5 from "/assets/person/7.jpeg"
import Img6 from "/assets/person/8.jpeg"
import Img7 from "/assets/person/9.jpeg"
import Img8 from "/assets/person/10.jpeg"

export default function Rightbar({profile}){
  const HomerightBar=()=>{
    return(
      <>
      <div className="birthday">
            <img src={Img1} alt="" className="birthdayGift" />
            <span className="birthdayWishes"><b>prashant kumar </b>and <b>3 Other friends</b> have birthday today</span>
          </div>
          <img src={img} alt="" className="birthdayImg" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((p)=>(
              <Online key={p.id} user={p}/>
            ))}
          </ul>
      </>
    )
  }

  const ProfileRightbar=()=>{
    return(
      <>
      <h4 className="rightbarTitle">Friends Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">

        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfovalue">Varanasi</span>
        </div>
        <div className="rightbarInfoItem">

        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfovalue">Sattanpur</span>
        </div>
        <div className="rightbarInfoItem">

        <span className="rightbarInfoKey">Relationship</span>
        <span className="rightbarInfovalue">Single</span>
        </div>
      </div>
      <h4 className="userFriends">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src={Img3} alt="" className="rightbarfollowingImg" />
          <span className="follingName">Deepak Verma</span>
        </div>
        <div className="rightbarFollowing">
          <img src={Img4} alt="" className="rightbarfollowingImg" />
          <span className="follingName">Ritesh Kumar</span>
        </div>
        <div className="rightbarFollowing">
          <img src={Img5} alt="" className="rightbarfollowingImg" />
          <span className="follingName">Prashant Kumar</span>
        </div>
        <div className="rightbarFollowing">
          <img src={Img6} alt="" className="rightbarfollowingImg" />
          <span className="follingName">Shalini Singh</span>
        </div>
        <div className="rightbarFollowing">
          <img src={Img7} alt="" className="rightbarfollowingImg" />
          <span className="follingName">Aman Nigam</span>
        </div>
        <div className="rightbarFollowing">
          <img src={Img8} alt="" className="rightbarfollowingImg" />
          <span className="follingName">Shaury Awashthi</span>
        </div>
      </div>
      </>
    )
  }
    return(
     <div className="rightbar">
        <div className="birthdatWrapper">
          {profile?<ProfileRightbar/>:<HomerightBar/>}
          
        </div>
     </div>
    )
}
import "./profile.css";
import Topbar from "../topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import Img1 from "/assets/post/3-(1).jpeg"
import Img2 from "/assets/person/1.jpeg"
export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="prifilerightTop">
            <div className="profileCover">

            <img src={Img1} alt="" className="profilecoverImg" />
            <img src={Img2} alt="" className="profileuserImg" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Deepak Verma</h4>
                <span className="profileInfoDesc">Hello My Connections!</span>
            </div>
          </div>
          <div className="profilerightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

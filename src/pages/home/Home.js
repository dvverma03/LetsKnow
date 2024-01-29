import Topbar from "../topbar/Topbar.js";
import Sidebar from "../../components/sidebar/sidebar.js";
import Rightbar from "../../components/rightbar/rightbar.js";
import Feed from "../../components/feed/feed.js";
import "./home.css"
export default function Home(){
    return(
        <>
        <Topbar/>
        <div className="homecontainer">

        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
        </>
    )
}
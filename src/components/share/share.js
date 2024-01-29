import "./share.css"
import Img1 from "/assets/person/1.jpeg"
import { PermMedia , Room, EmojiEmotions, Label} from "@mui/icons-material"
export default function Share(){
    return(
        <div className="share">
         <div className="shareWrapper">
            <div className="shareTop">
                <img src={Img1} alt="" className="shareProfileImg" />
                <input type="text" placeholder="Whats in your mind" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="ShareOptionIcon"/>
                        <span className="shareMediaText">Photos or Videos</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="orange" className="ShareOptionIcon"/>
                        <span className="shareMediaText">Tag</span>
                    </div>
                    <div  className="shareOption">
                        <Room htmlColor="green" className="ShareOptionIcon"/>
                        <span className="shareMediaText">Locations</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="ShareOptionIcon"/>
                        <span className="shareMediaText">Feelings</span>
                    </div>
                    <button className="shareButton">Share</button>
                   
                </div>
            </div>
         </div>
        </div>
    )
}
import React from "react"
import "./sidebar.css"
import { Bookmark, Chat, Group, RssFeed, Videos, Question, Courses, Event, Jobs, HelpOutline, WorkOutline, School, PlayCircleFilledOutlined } from "@mui/icons-material"
import { Button } from "@mui/material"
import person from "/assets/person/2.jpeg"
import { Users } from "../../constant/Users"
import Friend from "../friends/friends"

export default function Sidebar(){
    return(
     <div className="sidebar"> 
        <div className="sidebarWraper">
            <ul className="sidebarList">
                <li className="sidebarItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarlistItemText">Feed</span>
                </li>
                <li className="sidebarItem">
                    <Chat className="sidebarIcon"/>
                    <span className="sidebarlistItemText">Chat</span>
                </li>
                <li className="sidebarItem">
                    <PlayCircleFilledOutlined  className="sidebarIcon"/>
                    <span className="sidebarlistItemText">Videos</span>
                </li>
                <li className="sidebarItem">
                    <Group className="sidebarIcon"/>
                    <span className="sidebarlistItemText">Groups</span>
                </li>
                <li className="sidebarItem">
                    <Bookmark className="sidebarIcon"/>
                    <span className="sidebarlistItemText">Bookmark</span>
                </li>
                <li className="sidebarItem">
                    <HelpOutline  className="sidebarIcon"/>
                    <span className="sidebarlistItemText">Questions</span>
                </li>
                <li className="sidebarItem">
                    <WorkOutline className="sidebarIcon"/>
                    <span className="sidebarlistItemText">Jobs</span>
                </li>
                <li className="sidebarItem">
                    <Event className="sidebarIcon"/>
                    <span className="sidebarlistItemText">Event</span>
                </li>
                <li className="sidebarItem">
                    <School className="sidebarIcon"/>
                    <span className="sidebarlistItemText">Courses</span>
                </li>
            </ul>
            <Button className="sidebarButton">Show More</Button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                {Users.map(u=>(
                    <Friend key={u.id} user={u}/>
                ))}
            </ul>
        </div>
     </div>
    )
}
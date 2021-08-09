import React from 'react'

import {SidebarLinks}  from './SidebarLinks'
import { Button } from "@material-ui/core";

import "../../assets/css/sidebar.css"




function Sidebar() {
    return (
        <div className="Sidebar">
            <ul>
                {SidebarLinks.map((val,key) => {
                    return (
                        <li
                            className="sidebarlinks"
                            key={key}
                            id={window.location.pathname == val.link ? "active" : ""}
                            onClick={() => {window.location.pathname = val.link}}
                        >
                            <div className="sidebaricon"> {val.icon} </div>
                            <div clasName="sidebartitle"> {val.title} </div>
                        </li>
                    );
                    })}
            </ul>
            <Button variant="outlined" className="sidebar_tweetbutton" fullWidth>
            Tweet
            </Button>
        </div>
    )
}

export default Sidebar

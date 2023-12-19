import React from 'react'
import './CSS/Header.css'
import { IconButton, Avatar } from '@material-ui/core'
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
function Header() {
    return (
        <div>
            <div className="header">
                <div className="header_left">
                    <IconButton>
                        <ReorderIcon></ReorderIcon>
                    </IconButton>
                    <img src="https://cdn.vox-cdn.com/thumbor/x1-9UwiB_BeLufaPfDTRaLrACBo=/0x0:1320x880/1200x628/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="logo" srcset="" style={{ height: "50px" }} />

                </div>
                <div className="header_mid">
                    <div className='search_mail'>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <input type="text"
                            placeholder='Search mail' />
                        <IconButton>
                            <ExpandMoreIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="header_right">
                    <IconButton>
                        <HelpOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                    <Avatar src='https://cdn-icons-png.flaticon.com/512/5556/5556499.png'>

                    </Avatar>
                </div>
            </div>

        </div>
    )
}

export default Header

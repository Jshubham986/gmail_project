import React from 'react'
import './CSS/Sidebar.css'
import InboxIcon from '@mui/icons-material/Inbox';
import { Button } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import Sidebaroption from './Sidebaroption';
import StarIcon from '@mui/icons-material/Star';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../Store/mailslice';
function Sidebar() {
    const dispatch = useDispatch()
    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon />} className='compose_btn' onClick={()=>dispatch(openSendMessage())}>Compose</Button>
            <Sidebaroption Icon={InboxIcon} title="Inbox" number="288" isactive={true} />
            <Sidebaroption Icon={StarIcon} title="Starred" number={500} />
            <Sidebaroption Icon={WatchLaterIcon} title="Watch Later" number={100} />
            <Sidebaroption Icon={LabelImportantIcon} title="Important" number={100} />
            <Sidebaroption Icon={SendIcon} title="Sent Mail" number={100} />
            <Sidebaroption Icon={DraftsIcon} title="Drafts" number={100} />
            <Sidebaroption Icon={LabelIcon} title="Labels" number={100} />
            <Sidebaroption Icon={DeleteIcon} title="Trash" number={100} />
            <Sidebaroption Icon={FindInPageIcon} title="Spam" number={100} />
            <Sidebaroption Icon={ExpandMoreIcon} title="More" number={100} />
            <hr />
            <h3 className='sidebaroption_heading'>
                Meet
            </h3>
            <Sidebaroption Icon={VideocamIcon} title="New Meeting" number={100} />
            <Sidebaroption Icon={KeyboardIcon} title="Join Meeting" number={100} />
            <hr />
</div>
    )
}

export default Sidebar

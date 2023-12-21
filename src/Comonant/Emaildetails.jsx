import React from 'react'
import './CSS/Emailist.css'
import { Avatar, IconButton } from '@material-ui/core'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RefreshIcon from '@mui/icons-material/Refresh';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PrintIcon from '@mui/icons-material/Print';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from 'react-router-dom';
import {selectMail} from '../Store/mailslice';
import { useSelector } from 'react-redux';


function Emaildetails() {
    const mail = useSelector(selectMail)
    console.log(mail)
    const navigate = useNavigate()
    return (
        <div className='emaildetails'>

            <div className='emailsetting'>
                <div className='emailist_settingleft'>
                    <IconButton>
                        <ArrowBackIcon onClick={()=>navigate("/")}/>
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className='emailist_settingright'>
                    <p>1-50 of 1,405</p>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
            </div>
            <div className='emaildetails_middleheader'>
            <div className='emaildetails_header'>
                <div className='emaildetails_headerleft'>
                    <h6>{mail.subject}</h6>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                </div>
                <div className='emaildetails_headerright'>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>

                    <IconButton>
                        <LaunchIcon />
                    </IconButton>
                </div>
            </div>
            
                <div className='emaildetails_middle_header'>
                    <div className='emaildetails_middle_headerleft'>
                        <Avatar></Avatar>
                        <h6>{mail.subject}</h6>
                        <p>{mail.name}</p>

                    </div>
                    <div className='emaildetails_middle_headerright'>
                        <p>{mail.time}</p>
                        <IconButton>
                            <StarIcon />
                        </IconButton>

                        <IconButton>
                            <ReplyIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className='emaildetails_body'>
                    <p>{mail.message}</p>
                </div>
            </div>
        </div>
    )
}

export default Emaildetails

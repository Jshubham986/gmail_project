import React from 'react'
import './CSS/Sidebar.css'

function Sidebaroption({ Icon, title, number, isactive }) {
    return (
        <div className={`sidebar_option ${isactive && `sidebaroption_active`}`}>
            <Icon />
            <h4>{title}</h4>
            <p>{number}</p>
        </div>
    )
}

export default Sidebaroption

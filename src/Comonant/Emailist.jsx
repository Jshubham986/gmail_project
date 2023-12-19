import React from 'react'
import Email_settings from './Email_settings'
import Emailtype from './Emailtype'
import Emailbody from './Emailbody'

function Emailist() {
  return (
    <div className='email'>
        <Email_settings/>
        <Emailtype/>
        <Emailbody
        name="Shubham Jadhav"
        subject="This is subject"
        message="We are in message section.We are in message section.We are in message section.We are in message section.We are in message section.We are in message section.We are in message section.We are in message section.We are in message section."
        time="3:00 PM"/>
    </div>
  )
}

export default Emailist

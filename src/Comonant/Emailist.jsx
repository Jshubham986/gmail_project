import React, { useEffect, useState } from 'react'
import Email_settings from './Email_settings'
import Emailtype from './Emailtype'
import Emailbody from './Emailbody'
import db from '../firebase'


function Emailist() {

  const [email, setEmail] = useState([])
  useEffect(() => {
    db.collection("Emails").onSnapshot(snapshot => {
      setEmail(snapshot.docs.map((doc => ({
        id: doc.id,
        data: doc.data(),

      }))))
        .collection("Emails")
        .orderBy("", "desc")
    })
  }, [])
  console.log(email)
  return (
    <div className='email'>
      <Email_settings />
      <Emailtype />

      {
        email.map(({ id, data }) => {
          return (
            <Emailbody
              ket={id}
              name={data.to}
              subject={data.subject}
              message={data.message}
              time={new Date(data.createdAt?.seconds * 1000).toLocaleTimeString()}
            />
          )
        })
      }


    </div>
  )
}

export default Emailist

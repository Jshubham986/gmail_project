import React from 'react'
import './CSS/Login.css'
import authu from '../firebase'
import provider from '../firebase'
import { useDispatch } from 'react-redux'
import { signin } from '../Store/userslice'
// import  {GoogleAuthProvider} from 'firebase/auth';
function Login() {

    const dispath = useDispatch()
    const login=()=>{
       authu.signInWithPopup(provider, authu).then((user)=>{
            // dispath(signin({
            //     displayName : user.displayname,
            //     email : user.email,
            //     photoURL : user.photoURL,
            //     uid : user.uid
            // }))
            console.log(user)
        }).catch(error=>{alert(error)})

    // let provider = new GoogleAuthProvider();
        // authu.authusignInWithPopup(authu, provider)
        // .then((re)=>{
        //     console.log(re);
        // })
        // .catch((err) => alert(err.message))
    
    }

    return (
        <div className='loginwrapper'>
            <div className='login'>
                <img src="https://cdn.vox-cdn.com/thumbor/x1-9UwiB_BeLufaPfDTRaLrACBo=/0x0:1320x880/1200x628/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="logo" srcset=""  />
                <button className='gmail_login' onClick={login}>Login with Gmail</button>
            </div>
        </div>
    )
}

export default Login

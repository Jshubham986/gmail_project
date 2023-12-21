
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Comonant/Header';
import Sidebar from './Comonant/Sidebar';
import Emailist from './Comonant/Emailist';
import Compose from './Comonant/Compose';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './Store/mailslice';
import ParentComponent from './Comonant/ParentComponant';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Emaildetails from './Comonant/Emaildetails';
import Login from './Comonant/Login';
import { selectUser } from './Store/userslice';

function App() {

  const isopen = useSelector(selectSendMessageIsOpen)
  console.log(isopen)
  const user = useSelector(selectUser);
  console.log(user)
  return (
    <>
      {/* <BrowserRouter>
        <Routes>

          <Route path='/' element={<Games />} />
          <></>
        </Routes>
      </BrowserRouter> */}
      {
        user && (
          <>

            <BrowserRouter>
              <Routes>
            <Header />
            <Sidebar />
                <div className='app_body'>

                  <Route path='/' element={<Emailist />} />
                  <Route path='/mail' element={<Emaildetails />} />
                </div >
                {isopen && <Compose />
                }
              </Routes>
            </BrowserRouter>
          </>
        )
      } {
        <Login />
      }




    </>
  )
}

export default App

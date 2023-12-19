
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Comonant/Header';
import Sidebar from './Comonant/Sidebar';
import Emailist from './Comonant/Emailist';
import Compose from './Comonant/Compose';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './Store/mailslice';
import ParentComponent from './Comonant/ParentComponant';

function App() {

const isopen = useSelector(selectSendMessageIsOpen)
console.log(isopen)
  return (
    <>
      {/* <BrowserRouter>
        <Routes>

          <Route path='/' element={<Games />} />
          <></>
        </Routes>
      </BrowserRouter> */}

      <Header/>
      <div className='app_body'>
        <Sidebar/>
        <Emailist/>
      </div>
      {isopen && <Compose/>}
      
      
    </>
  )
}

export default App

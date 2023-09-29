import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
//import Home from './user/user-pages/Home'
// import HotelPage from './user/user-pages/HotelPage'
// import LoginPage from './user/user-pages/LoginPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import SingleViewPage from './user/user-pages/SingleViewPage'
// import Signup from './user/user-pages/Signup'


function App() {
  return (
    <> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/signup' element={<Signup/>}/>
        <Route path='/hotels' element={<HotelPage/>}/>
        <Route path='/hotel/:id' element={<SingleViewPage/>}/> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

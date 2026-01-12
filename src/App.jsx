
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './components/Navbar'
import Login from './Pages/Login'
import Signup from './Pages/Signup'


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

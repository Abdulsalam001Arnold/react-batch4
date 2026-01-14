
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './components/Navbar'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import PostConfessions from './Pages/Post-Confessions'
import Confessions from './Pages/Confessions'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/post-confessions' element={<PostConfessions/>}/>
          <Route path='/confessions' element={<Confessions/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

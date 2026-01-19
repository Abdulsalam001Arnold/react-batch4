
import './index.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './components/Navbar'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import PostConfessions from './Pages/Post-Confessions'
import Confessions from './Pages/Confessions'
import Protected from './components/Protected'
import userStore from './store/userStore'

function App() {
const {checkAuth} = userStore()

useEffect(() => {
  checkAuth()
}, [checkAuth])

  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>

          {/* Protected Routes */}
          <Route element={<Protected/>}>
            <Route path='/post-confessions' element={<PostConfessions/>}/>
            <Route path='/confessions' element={<Confessions/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

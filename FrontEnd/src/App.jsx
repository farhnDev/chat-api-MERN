import React from 'react'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/home/Home'
import { Navigate,Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
  const {user} = useAuthContext();
    return (
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to={"/login"}/>} />
          <Route path='/login' element={user ? <Navigate to="/"/> : <Login />} />
          <Route path='/signup' element={user ? <Navigate to="/" /> : <SignUp />} />
        </Routes>
        <Toaster/>
      </div>
    )
  }

export default App

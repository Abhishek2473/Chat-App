import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Header from './components/Header';
import Home from './pages/home';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
function App() {
  const { authUser } = useAuthContext();
  return (
    
    <Router>
      <Header/>
      <Routes>
      <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
      <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />

        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />    
          </Routes>
      <Toaster></Toaster>
    </Router>

  );
}

export default App

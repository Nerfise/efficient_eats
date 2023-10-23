import React from 'react'
import LandingPage from './pages/LandingPage/LandingPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import ForgetPasswordPage from './pages/ForgotPasswordPage/ForgetPasswordPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeRoutes from './pages/HomeRoutes'


export default function App() {
    return (
        <BrowserRouter>
            <div className='bg-white dark:bg-dark dark:text-white transition ease-in-out font-poppins'>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path="/home/*" element={ <HomeRoutes/> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};
export const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
};
  


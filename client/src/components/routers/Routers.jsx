import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../../screen/home/Home'
import Welcome from '../../components/welcome/Welcome'
import Register from '../../screen/register/Register'
function Routers() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} >
         <Route path='/' element={<Welcome/>} />
         <Route path='/register' element={<Register/>} />
        </Route>
    </Routes>

    </>
  )
}

export default Routers
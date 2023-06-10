import React from 'react'
import Home from '../pages/home/Home'
import MyAccount from '../pages/myAccount/MyAccount'
import { Route,Routes } from 'react-router-dom'

export default function PrivateRouter() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/myaccount' element={<MyAccount />} />
        </Routes>
    </>
  )
}

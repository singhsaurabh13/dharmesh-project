import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Head from './Components/Head'


export default function App() {
  return (
    <div>
      <Head/>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

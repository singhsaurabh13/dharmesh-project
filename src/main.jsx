import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'

import About from './Components/About.jsx'
import Abhishekam from './Components/Abhishekam.jsx'
import Dhanur from './Components/Dhanur.jsx'





const router =createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/abhi' element={<Abhishekam/>}/>
   <Route path='Dhanur' element={<Dhanur/>}/>
 

    </Route>
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

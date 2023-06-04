import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,Router,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.scss'
import NotFound from './Pages/NotFound/NotFound.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'*',
    element:<NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>, 
)

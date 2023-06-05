import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound.jsx'

import Home from './Pages/Home/Home'
import './index.scss'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'*',
    element:<NotFound />
  }

])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

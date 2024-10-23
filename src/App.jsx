import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Read from './Components/Read'
import Edit from './Components/Edit'
import PagenotFound from './Components/PagenotFound'
import "./Global.css"

let routes=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/create",
        element:<Create/>
    },
    {
        path:"/read/:id",
        element:<Read/>
    },
    {
        path:"/edit/:id",
        element:<Edit/>
    },
    {
        path:"*",
        element:<PagenotFound/>
    },
])

const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
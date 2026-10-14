import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./styles/main_style.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import { Home } from './routes/Home.tsx'
import { Login } from './routes/Login.tsx'
import { Notas } from './routes/Notas.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/notas",
        element: <Notas />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

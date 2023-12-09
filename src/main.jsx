import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from './components/Root.jsx'
import Login from './components/Login.jsx'
import Callback from './components/Callback.jsx'
import App from './components/App.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="login" element={<Login />} />
      <Route path="app" element={<App />} />
      <Route path="callback" element={<Callback />} />
      <Route path="*" element={<Root />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

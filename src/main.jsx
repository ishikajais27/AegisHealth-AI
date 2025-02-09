import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Front from './components/Front.jsx' // Import your Home component
import About from './components/About.jsx' // Import your About component
import Login from './components/Login.jsx' // Import your About component
import HealthForm from './components/HealthForm.jsx'
import ContactUs from './components/ContactUs.jsx'

// Define the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // This makes Home the default route for '/'
        element: <Front />,
      },
      {
        path: 'home',
        element: <Front />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'contact-us', // New route for ContactUs
        element: <ContactUs />,
      },
      {
        path: '/health-form',
        element: <HealthForm />,
      },
    ],
  },
])

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

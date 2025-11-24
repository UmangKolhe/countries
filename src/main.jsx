import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createHashRouter , RouterProvider} from "react-router-dom"
import Error from './components/Error.jsx'
import SearchSection from './components/SearchSection.jsx'
import CardContainer from './components/CardContainer.jsx'
import Body from './components/Body.jsx'
import CountryDetails from './components/CountryDetails.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
const router = createHashRouter([
  {
    path:"/",
    element:<App/>,
    children:[
    {
          path:"/",
          element:<Body/>
    },{
      path:"/country/:name",
      element:<CountryDetails/>
    }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ThemeProvider> <RouterProvider router={router}/> </ThemeProvider>
  </StrictMode>,
)

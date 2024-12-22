import { StrictMode, Fragment } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fragment>
      <App />
    </Fragment>
  </StrictMode>
)

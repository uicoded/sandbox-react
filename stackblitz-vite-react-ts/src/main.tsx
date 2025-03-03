import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Swap this 👇 for the example app that you're testing
import App from './App_default.tsx'
// import App from './examples/App_forms-uncontrolled-inputs-default-value'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

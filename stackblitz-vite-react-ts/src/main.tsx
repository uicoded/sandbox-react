import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Swap this 👇 for the example app that you're testing
import App from './App_default.tsx'
// import App from './examples/forms/App_forms-uncontrolled-inputs-default-value'
// import App from './examples/App_error-boundary.tsx'
// import App from './examples/hooks/App_hooks-use-state.tsx'
// import App from './examples/hooks/App_hooks-use-state-initial-value.tsx'
// import App from './examples/hooks/App_hooks-use-effect.tsx'
// import App from './examples/hooks/App_hooks-use-effect-set-interval.tsx'
// import App from './examples/styles/App_3-ways-adding-style.tsx'
// import './examples/styles/App_styled-box.css';
// import App from './examples/styles/App_styled-box.tsx'
// import App from './examples/App_using-keys.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

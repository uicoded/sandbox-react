import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MutationObserversDemo from './components/MutationObserversDemo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  // ... other routes ...
  {
    path: '/mutation-observers',
    element: <MutationObserversDemo />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

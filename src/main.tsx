import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { OpenCartProvider } from './context/OpenCart'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OpenCartProvider>
      <App />
    </OpenCartProvider>
  </React.StrictMode>
)

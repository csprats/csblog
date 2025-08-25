import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { Article } from './Article.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='mainContainer'>
      <App />
      <Article />
    </div>
  </StrictMode>,
)
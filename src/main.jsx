/**
 * @copyright 2025 Karim Nassif
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Components
 */
import App from './App.jsx';

/**
 * CSS Link
 */
import './index.css';
import 'lenis/dist/lenis.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
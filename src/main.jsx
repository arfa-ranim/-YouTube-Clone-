import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//createRoot vous permet de créer une racine de rendu pour afficher vos composants React dans un nœud DOM du navigateur.
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)

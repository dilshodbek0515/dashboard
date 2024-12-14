import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'number-brm'
import { StateProvider } from './context/index.jsx'
import { reducer, initialState } from './context/reducer.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </BrowserRouter>
)

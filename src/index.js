import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import RouteProvider from './hook/RouteProvider'

ReactDOM.render(
  <React.StrictMode>
    <RouteProvider>
      <Router>
        <App />
      </Router>
    </RouteProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

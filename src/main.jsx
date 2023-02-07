import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Calculator from './main/Calculator'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h3>
        Calculadora <strong>React</strong>
      </h3>
      <Calculator />
    </div>
  </React.StrictMode>
)

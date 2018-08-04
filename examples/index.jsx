import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.style'
import App from './components/App'

ReactDOM.render(
  <Router basename={ROOT_PATH}>
    <App />
  </Router>,
  document.getElementById('root'),
)

import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App.js'
import { Provider } from 'react-redux'
import store from './store'

let Kid = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(Kid, document.getElementById('root'))

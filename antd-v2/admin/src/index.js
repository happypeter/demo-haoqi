import App from './containers/App'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

const Kid = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(Kid, document.getElementById('root'))

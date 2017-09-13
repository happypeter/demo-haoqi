import React, { Component } from 'react'
import './app.css'
import {
  BrowserRouter as Router
 } from 'react-router-dom'

import Layout from '../Layout/Layout'
import Main from '../Main/Main'

class App extends Component {
  render () {

    return (
      <Router>
        <Layout>
          <Main />
        </Layout>
      </Router>
    )
  }
}

export default App

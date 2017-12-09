import React, { Component } from 'react'
import styled from 'styled-components'

class AlertBox extends Component {
  componentDidMount () {
    window.setTimeout(
      this.props.hideAlert, 4000
    )
  }

  render () {
    return (
      <Wrap>
        {this.props.alertMsg}
      </Wrap>
    )
  }
}

export default AlertBox

const Wrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: auto;
  padding: 20px;
  color: #fff;
  line-height: 1.8;
  background-color: rgba(0,0,0,.8);
`

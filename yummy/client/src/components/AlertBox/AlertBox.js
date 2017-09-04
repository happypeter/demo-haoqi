import React, { Component } from 'react'
import './alert-box.css'

class AlertBox extends Component {

  state = {
    show: true
  }

  componentDidMount = () => {
    var fixed = document.getElementById('fixed');
    fixed.addEventListener('touchmove', (e) => {
      e.preventDefault()
    })
    fixed.addEventListener('wheel', (e) => {
      e.preventDefault()
    });
  }

  handleClick = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return(
      <div id="fixed" className={`alert-box ${this.state.show && 'show'}`}>
        <div className="alert-box-card">
          警告信息
          <div onClick={this.handleClick}
            className="alert-actions">
            关闭
          </div>
        </div>
      </div>
    )
  }
}

export default AlertBox

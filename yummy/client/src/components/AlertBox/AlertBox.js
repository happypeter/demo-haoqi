import React, { Component } from 'react'
import './alert-box.css'

class AlertBox extends Component {

  componentDidMount = () => {
    var fixed = document.getElementById('fixed');
    fixed.addEventListener('touchmove', (e) => {
      e.preventDefault()
    })
    fixed.addEventListener('wheel', (e) => {
      e.preventDefault()
    });
  }

  render() {
    return(
      <div id="fixed" className={"alert-box show"}>
        <div className="alert-box-card">
          警告信息
          <div className="alert-actions">
            关闭
          </div>
        </div>
      </div>
    )
  }
}

export default AlertBox

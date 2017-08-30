import React, { Component } from 'react'
import './form.css'
import { Link } from 'react-router-dom'

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    let data = this.props.fields.reduce((obj, t) => {
      obj[t.name] = this[t.refName].value
      return obj
    }, {})
    this.myForm.reset()
  }

  render () {
    const { fields, title, option } = this.props

    const inputList = fields.map((t, i) => (
      <input key={i}
        ref={value => this[t.refName] = value}
        placeholder={t.placeholder}
        type={t.type}
        />
    ))
    return (
      <div className='form'>
        <div className='form-hero'>
          <div className='form-title'>
            {title}
          </div>
          <div className='form-slogan'>
            连接一个个小而确定的幸福
          </div>
        </div>
        <form onSubmit={this.handleSubmit}
          ref={value => this.myForm = value}
          >
          <div className='form-inputs'>
            <div className='form-inputs-inner'>
              {inputList}
            </div>
          </div>
          <div className='form-button'>
            <button type='submit'>{title}</button>
          </div>
        </form>
        <div className='form-option'>
          <Link to={option.link}>
            {option.text}
          </Link>
        </div>
      </div>
    )
  }
}

export default Form

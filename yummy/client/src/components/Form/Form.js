import React, { Component } from 'react'
import './form.css'
import { Link } from 'react-router-dom'

class Form extends Component {
  render () {
    const { fields, title, option } = this.props

    const inputList = fields.map((t, i) => (
      <input key={i}
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
        <form>
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

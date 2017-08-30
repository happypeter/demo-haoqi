import React, { Component } from 'react'

class Form extends Component {
  render () {
    const { fields } = this.props

    const inputList = fields.map((t, i) => (
      <input key={i}
        placeholder={t.placeholder}
        type={t.type}
        />
    ))
    return (
      <div className='form'>
        <form>
          {inputList}
        </form>
      </div>
    )
  }
}

export default Form

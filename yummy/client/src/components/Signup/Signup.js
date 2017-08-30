import React from 'react'
import './signup.css'
import Form from '../Form/Form'

const fields = [
  {
    type: 'text',
    placeholder: '用户名'
  },
  {
    type: 'password',
    placeholder: '密码'
  },
  {
    type: 'password',
    placeholder: '再次输入'
  },
  {
    type: 'email',
    placeholder: 'email'
  }
]

export default () => (
  <div className='signup'>
    <Form fields={fields} />
  </div>
)

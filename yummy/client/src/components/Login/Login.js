import React from 'react'
import './login.css'
import Form from '../Form/Form'

const fields = [
  {
    type: 'text',
    placeholder: '用户名'
  },
  {
    type: 'password',
    placeholder: '密码'
  }
]

export default () => (
  <div className='login'>
    <Form fields={fields} />
  </div>
)

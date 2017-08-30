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

const option = {
  text: '没有账号，请先注册',
  link: '/signup'
}

const title = '登录'
export default () => (
  <div className='login'>
    <Form fields={fields}
      title={title}
      option={option}
      />
  </div>
)

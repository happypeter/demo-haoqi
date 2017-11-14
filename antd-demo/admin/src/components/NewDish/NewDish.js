import React, { Component } from 'react'
import { Form, Input, Button, Icon, message } from 'antd'
import styled from 'styled-components'
import axios from 'axios'
import {
  withRouter
} from 'react-router-dom'

const NewDishWrap = styled.div`
  max-width: 950px;
`

class NewDish extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    let data = this.props.form.getFieldsValue()
    let unFilled = Object.keys(data).filter(
      prop => {
         return (!data[prop])
      }
    )
    if(unFilled.length === 0 ) {
      const allData = { ...data,
        poster: 'https://avatars3.githubusercontent.com/u/72467?v=4&s=460'
      }
      axios.post(`http://localhost:3008/dishes`, allData).then(
        res => {
          console.log(res.data)
          const targetPath = '/dashboard/dishes'
          this.props.history.push(targetPath)
          this.props.updateSelectedKeys([targetPath])
        }
      )
    } else {
      message.error("请填入全部信息")
    }
  }

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  render () {
    const { getFieldDecorator, getFieldsError } = this.props.form
    const config = {
        rules: [{ type: 'string', required: true, message: '必填项目' }],
      }
    return (
      <NewDishWrap>
        <Form onSubmit={this.handleSubmit} >
          <Form.Item>
            {
              getFieldDecorator('name', config)(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="名称" />)
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('desc', config)(<Input prefix={<Icon type="tag-o" style={{ fontSize: 13 }} />} placeholder="描述" />)
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('price', config)(<Input prefix={<Icon type="pay-circle-o" style={{ fontSize: 13 }} />} placeholder="价格" />)
            }
          </Form.Item>
          <Form.Item>
            <Button disabled={this.hasErrors(getFieldsError())}
              type='primary' htmlType='submit'>
              提交
            </Button>
          </Form.Item>
        </Form>
      </NewDishWrap>
    )
  }
}

export default Form.create()(withRouter(NewDish))

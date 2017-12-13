import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Input, Icon, Form, message } from 'antd'
const FormItem = Form.Item

class Home extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.login(this.props.form.getFieldsValue())
      .then(
        data => {
          message.success(data)
        }
      )
      .catch(
        err => {
          message.error(err.message)
        }
      )
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Wrap>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {
              getFieldDecorator('username')(
                <Input
                  placeholder='username'
                  prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
              )
            }

          </FormItem>
          <FormItem>
            {
              getFieldDecorator('password')(
                <Input
                  placeholder='password'
                  type='password'
                  prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
              )
            }
          </FormItem>
          <FormItem>
            <StyledButton type='primary' htmlType='submit' >
              登录
            </StyledButton>
          </FormItem>
        </Form>
      </Wrap>
    )
  }
}

export default Form.create()(Home)

const Wrap = styled.div`
  border: 1px solid #ddd;
  width: 250px;
  padding: 10px;
  margin: 100px auto;
`

const StyledButton = styled(Button)`
  width: 100%;
`

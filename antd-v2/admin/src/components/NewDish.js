import React, { Component } from 'react'
import { Form, Input, Button, Icon, message } from 'antd'
import styled from 'styled-components'
import UploaderContainer from '../containers/UploaderContainer'
import { newDishFormInputs, config } from '../constants/NewDishFormConfig'
const FormItem = Form.Item

class NewDish extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { poster } = this.props
        if (!poster) {
          message.error('请上传海报')
          return false
        }
        this.props.submitDish({ ...values, poster }).then(
          success => {
            message.success(success.message)
          }
        ).catch(
          err => {
            message.error(err.message)
          }
        )
      } else {
        return false
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form

    const inputs = newDishFormInputs.map(
      t => (
        <FormItem key={t.name}>
          {getFieldDecorator(t.name, config)(
            <Input prefix={<Icon type={t.iconType} style={{ fontSize: 14 }} />}
              placeholder={t.placeholder}
              type='text'
            />
          )}
        </FormItem>
      )
    )
    return (
      <Wrap>
        <UploaderContainer />
        <Form onSubmit={this.handleSubmit}>
          {inputs}
          <FormItem>
            <Button type='primary' htmlType='submit'>添加甜点</Button>
          </FormItem>
        </Form>
      </Wrap>
    )
  }
}

export default Form.create()(NewDish)

const Wrap = styled.div`
  max-width: 900px;
  margin: 20px auto;
`

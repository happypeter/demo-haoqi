import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Form extends Component {
  state = this.props.config.fields.reduce(
    (obj, t) => {
      obj[t.name] = ''
      return obj
    }, {}
  )

  handleChange = (e, field) => {
    this.setState({
      [field]: e.target.value
    })
  }

  formSubmit = (e) => {
    e.preventDefault()
    let data = this.props.config.fields.reduce((obj, t) => {
      obj[t.name] = this.state[t.name]
      return obj
    }, {})
    this.props.onFormSubmit(data)
  }

  render () {
    const { options, fields } = this.props.config
    const inputList = fields.map(
      t => (
        <Input
          key={t.name}
          type={t.type}
          placeholder={t.name}
          value={this.state[t.name]}
          onChange={e => this.handleChange(e, t.name)}
        />
      )
    )
    return (
      <Wrap>
        <Hero>
          <Title>
            {options.title}
          </Title>
          <Slogan>
            连接小而确定的幸福
          </Slogan>
        </Hero>
        <Inputs>
          <Inner>
            {inputList}
          </Inner>
        </Inputs>
        <Button onClick={this.formSubmit}>
          {options.title}
        </Button>
        <Option>
          <Link to={options.link}>{options.text}</Link>
        </Option>
      </Wrap>
    )
  }
}

export default Form

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 280px;
  margin: 0 auto;
`

const Hero = styled.div`
  height: 140px;
`

const Title = styled.div`
  font-size: 36px;
  color: #FFFFFF;
  line-height: 42px;
  text-align: center;
  margin-top: 54px;
`

const Slogan = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  color: #FFFFFF;
`

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  line-height: 16px;
  padding: 20px 8px;
  font-size: 14px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #E3E9EC;
  text-indent: 20px;
  color: #878787;
  &::placeholder {
    color: #CECECE;
  }
`

const Option = styled.div`
  margin-bottom: 35px;
  margin-top: 15px;
  text-align: center;
  a {
    color: white;
    line-height: 20px;
  }
`

const Button = styled.button`
  display: block;
  border: 0;
  line-height: 56px;
  outline: 0;
  width: 280px;
  margin: 0 auto;
  text-align: center;
  background: #FFFFFF;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.20);
  border-radius: 2px;
  font-size: 14px;
  color: #F77062;
  user-select: none;
  touch-action: manipulation;
  position: relative;
  /* andriod 手机上，入户输入表单时候，按钮会自动变位置，参考 ant-design 的登录表单代码*/
`

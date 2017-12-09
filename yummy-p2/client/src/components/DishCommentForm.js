import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class DishCommentForm extends Component {
  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  submitComment = () => {
    const { text } = this.state
    const user = this.props.currentUserId
    const dish = this.props.match.params.id
    this.props.addComment({ text, user, dish })
    this.setState({
      text: ''
    })
  }

  render() {
    const { isAuthenticated } = this.props
    const commentForm = (
      <Form>
        <Input value={this.state.text}
          onChange={this.handleChange}
          type="text"
        />
        <Button onClick={this.submitComment} type="submit">评论</Button>
      </Form>
    )
    const plzLogin = (
      <PlzLogin>
        发评论请先<Link to="/login">登录</Link>
      </PlzLogin>
    )
    return (
      <div>
        {isAuthenticated ? commentForm : plzLogin}
      </div>
    )
  }
}

export default DishCommentForm

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f7f7f7;
  padding: 10px;
  margin: 40px 0px;
`

const Input = styled.input`
  border: 0;
  outline: 0;
  background-color: rgba(0, 0, 0, 0);
  line-height: 31px;
  font-size: 15px;
  color: #777777;
  flex-grow: 1;
  & :focus {
    outline: 0;
    border: 0;
  }
`

const Button = styled.button`
  background-image: linear-gradient(-45deg, #F77062 0%, #FE5196 100%);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.20);
  border-radius: 2px;
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;
  width: 90px;
  border: 0;
  &:focus {
    border: 0;
    outline: 0;
  }
`

const PlzLogin = styled.div`
  padding: 20px;
  color: #ccc;
  a {
    color: #FE5196;
  }
`

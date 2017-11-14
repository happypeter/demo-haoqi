import React, { Component } from 'react'
import { Button, Input } from 'antd'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const StyledButton = styled(Button)`
  margin-top: 10px;
`

class DirCreator extends Component {
  state = {
    newDir: ''
  }

  handleClick = e => {
    e.preventDefault()
    const { newDir } = this.state
    this.props.onClick(newDir)
    this.setState({
      newDir: ''
    })
  }

  handleChange = e => {
    this.setState({
      newDir: e.target.value
    })
  }

  render () {
    return (
      <Wrap>
        <Input value={this.state.newDir}
          onChange={this.handleChange}
        />
        <StyledButton
          type="primary"
          onClick={this.handleClick}
        >
          添加
        </StyledButton>
      </Wrap>
    )
  }
}

export default DirCreator

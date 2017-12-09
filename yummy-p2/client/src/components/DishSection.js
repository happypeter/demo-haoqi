import React, { Component } from 'react'
import styled from 'styled-components'

// Note: 创建这个组件就是为了复用下面这两个 styled-components 组件。
class DishSection extends Component {
  state = {
    title: 'defaultTitle'
  }

  setSubTitle = subTitle => {
    this.setState(subTitle)
  }

  render() {
    const { children } = this.props
    let childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { setSubTitle: this.setSubTitle }))

    return (
      <Wrap>
        <SubTitle>{this.state.title}</SubTitle>
        <SubDetails>
          {this.state.details}
        </SubDetails>
        {childrenWithProps}
      </Wrap>
    )
  }
}

export default DishSection

const Wrap = styled.div``

const SubTitle = styled.div`
  color: #414141;
  font-size: 20px;
  margin-top: 50px;
  margin-bottom: 10px;
  font-weight: 200;
  text-align: center;
`

const SubDetails = styled.div`
  text-align: center;
  color: #818181;
  opacity: .8;
  margin-bottom: 20px;
`

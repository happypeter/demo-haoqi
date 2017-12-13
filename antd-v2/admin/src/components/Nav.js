import React, { Component } from 'react'
import styled from 'styled-components'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

class Nav extends Component {
  render () {
    const { selectItem, selectedIndex } = this.props
    return (
      <Wrap>
        <Menu
          onClick={e => selectItem(e.key)}
          style={{ borderRight: 'none' }}
          defaultOpenKeys={['dishes', 'orders']}
          selectedKeys={[selectedIndex]}
          mode='inline'
        >
          <SubMenu key='orders' title={<span><Icon type='file' /><span>订单</span></span>}>
            <Menu.Item key='/dashboard/orders'>未发货</Menu.Item>
            <Menu.Item key='/dashboard/orders/completed'>已发货</Menu.Item>
          </SubMenu>
          <SubMenu key='dishes' title={<span><Icon type='file' /><span>甜点</span></span>}>
            <Menu.Item key='/dashboard/dishes'>已有</Menu.Item>
            <Menu.Item key='/dashboard/dishes/new'>新建</Menu.Item>
          </SubMenu>
        </Menu>
      </Wrap>
    )
  }
}

export default Nav

const Wrap = styled.div``

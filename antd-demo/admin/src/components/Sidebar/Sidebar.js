import React, { Component } from 'react'
import styled from 'styled-components'
import {
  withRouter
} from 'react-router-dom'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

const SidebarWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const LogoWrap = styled.div`
  height: 60px;
  padding-left: 24px;
  line-height: 60px;
  font-size: 16px;
  font-weight: 700;
  background: #ececec;
`

const NavWrap = styled.div`
  flex-grow: 1;
`

const LogoutWrap = styled.div`
  height: 60px;
  line-height: 60px;
  display: flex;
`

const LogoutText = styled.div`
  flex-basis: 60px;
  text-align: center;
  background: #ff8a00;
  color: white;
  cursor: pointer;
`

const Username = styled.div`
  padding-left: 10px;
  background: #ececec;
  flex-grow: 1;
  color: #212121;
`


class Sidebar extends Component {
  state = {
    selectedKeys: [
      this.props.history.location.pathname
    ]
  }
  logout = () => {
    window.localStorage.removeItem('secret')
    this.props.history.push('/')
  }

  handleClick = (e) => {
    console.log(e.key)
    this.props.history.push(e.key)
    this.setState({
      selectedKeys: [e.key]
    })
  }

  render () {
    return (
      <SidebarWrap>
        <LogoWrap>
          好奇后台
        </LogoWrap>
        <NavWrap>
          <Menu
            onClick={this.handleClick}
            style={{ width: 240 }}
            selectedKeys={this.state.selectedKeys}
            defaultOpenKeys={['orders', 'dishes']}
            mode="inline"
          >
            <SubMenu key="orders" title={<span><Icon type="file" /><span>订单</span></span>}>
              <Menu.Item key="/dashboard/orders">未发货</Menu.Item>
              <Menu.Item key="/dashboard/orders/completed">已发货</Menu.Item>
            </SubMenu>
            <SubMenu key="dishes" title={<span><Icon type="heart" /><span>甜点</span></span>}>
              <Menu.Item key="/dashboard/dishes">所有</Menu.Item>
              <Menu.Item key="/dashboard/dishes/new">新建</Menu.Item>
            </SubMenu>
          </Menu>
        </NavWrap>
        <LogoutWrap>
          <LogoutText
            onClick={this.logout}
            >
            退出
          </LogoutText>
          <Username>
            Admin
          </Username>
        </LogoutWrap>
      </SidebarWrap>
    )
  }
}

export default withRouter(Sidebar)

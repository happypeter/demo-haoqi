import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import UserInfo from './SidebarUserInfo'
import {
  Link
} from 'react-router-dom'

class Sidebar extends Component {
  state = {
    isOpen: false
  }

  closeMenu = () =>{
    this.setState({
      isOpen: false
    })
  }

  render () {
    const { isOpen } = this.state
    return (
      <Wrap>
        <Menu
          customCrossIcon={ false }
          isOpen={isOpen}
        >
            <UserInfo {...this.props} />
            <div className="bm-link-list">
              <Link onClick={this.closeMenu} to="/">首页</Link>
              <Link onClick={this.closeMenu} to="/profile">个人中心</Link>
              <Link onClick={this.closeMenu} to="/dishes">猜你喜欢</Link>
            </div>
            <div className="bottom-button">
              <button onClick={this.closeMenu} className ="bm-close-button" >关闭</button>
            </div>
        </Menu>
      </Wrap>
    )
  }
}

export default Sidebar

const Wrap = styled.div`
  .bm-menu {
    background: #fff;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #fff;
  }

  .bm-burger-button {
    position: absolute;
    width: 18px;
    height: 12px;
    left: 17px;
    top: 42px;
  }

  .bm-item-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .bm-link-list {
    flex-grow: 2;
  }

  .bm-link-list a {
    display: block;
    line-height: 56px;
    border-bottom: 1px solid #E3E9EC;
    padding-left: 10px;
    font-size: 12px;
    color: #878787;
  }

  .bm-menu .user-info-text, .bm-menu .user-info-text a {
    font-size: 14px;
    color: #F77062;
    text-align: center;
    line-height: 1.0;
  }

  .bm-menu .user-info-text {
    display: block;
    margin: 16px auto;
  }

  .bm-user-name {
    display: inline-block;
    padding-right: 5px;
    border-right: 2px solid #F77062;
  }

  .bm-menu .user-info-text a {
    padding-left: 5px;
  }

  .bm-close-button {
    display: block;
    color: white;
    background-image: linear-gradient(-45deg, #F77062 0%, #FE5196 100%);
    border-radius: 2px;
    font-size: 14px;
    border: 0;
    width: 80%;
    margin: 30px auto;
    line-height: 39px;
  }

  .bm-user-avatar {
    margin: 0 auto;
  }
`

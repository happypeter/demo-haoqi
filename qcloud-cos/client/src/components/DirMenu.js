import React from 'react'
import { Menu, Icon } from 'antd'

export default ({ onClick, dirNames, currentDir }) => (
  <Menu
    mode="inline"
    onClick={onClick}
    selectedKeys={[currentDir]}
  >
    {
      dirNames.map(
        t => (
          <Menu.Item key={t}>
            <Icon type="folder" />
            {t}
          </Menu.Item>
        )
      )
    }
  </Menu>
)

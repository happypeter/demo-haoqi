import React from 'react'
import { Table, Button, Modal, message } from 'antd'
import moment from 'moment'
const confirm = Modal.confirm



export default ({ currentDirFiles, onDelete }) => {
  const deleteFile = record => {
    console.log('record', record)
    confirm({
      title: `确认删除 ${record.Key} ？`,
      content: '删除之后无法恢复',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        onDelete(record).then(
          key => message.success(`已删除：${key}`)
        ).catch(
          key => message.error(`${key} 删除失败`)
        )
      },
      onCancel: () => {
        console.log('Cancel')
      }
    })
  }
  const tableColumns = [
    {
      title: '文件名',
      dataIndex: 'Key',
      render: (text) => {
        return <span>{text.split('/')[1]}</span>
      }
    },
    {
      title: '上传时间',
      dataIndex: 'LastModified',
      render: (text) => {
        return <span>{moment(text).format('YYYY-MM-DD kk:mm:ss')}</span>
      }
    },
    {
      title: '操作',
      render: record => {
        return (
          <Button
            onClick={() => deleteFile(record)}
          >
            删除
          </Button>
        )
      }
    }
  ]
  return (
    <div>
      <Table columns={tableColumns}
        dataSource={currentDirFiles}
        rowKey={item => item.ETag}
        pagination={false}
        />
    </div>
  )
}

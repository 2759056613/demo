import { Table, Button } from 'antd'
import { useState } from 'react'
function App() {
  //需要展示的数据
  //数据驱动视图
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '=五彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '4',
      name: '=五彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '5',
      name: '=五彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '6',
      name: '=五彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ])
  //表头数据
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      dataIndex: 'bind',
      key: 'bind',
      render(_, record) {
        return (
          <Button
            type="primary"
            danger
            onClick={() => {
              handleClick(record.key)
            }}
          >
            删除
          </Button>
        )
      },
    },
  ]
  const paginationProps = {
    pageSize: 3, // 每页显示2条数据
  }
  const handleClick = (id) => {
    setDataSource(
      dataSource.filter((item) => {
        return item.key !== id
      })
    )
  }
  return (
    <div style={{ width: '298px' }}>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={paginationProps}
      ></Table>
    </div>
  )
}

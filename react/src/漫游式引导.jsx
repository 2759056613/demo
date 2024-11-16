import { Button, Space, Tour } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'
import { useRef } from 'react'
import { useLocalStorageState } from 'ahooks'
function App() {
  //决定漫游是否进行
  const [open, setOpen] = useLocalStorageState('tour', { defaultValue: true })
  //获取元素
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  //数据驱动
  const steps = [
    {
      title: 'Upload File',
      description: '我上早八',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      //目标
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ]
  return (
    <div style={{ margin: '100px 100px 100px 100px' }}>
      <Space direction="vertical">
        <Button ref={ref1}>Upload</Button>
        <Button
          ref={ref2}
          type="primary"
        >
          save
        </Button>
        <Button
          ref={ref3}
          icon={<EllipsisOutlined />}
        ></Button>
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
      ></Tour>
    </div>
  )
}
export default App

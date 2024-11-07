//antd组件库的优点在于你使用了多少组件打包的时候就只打包那些组件
import { Button, Space, Flex } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

function App() {
  const boxStyle = {
    width: '1000px',
    height: 120,
    borderRadius: 6,
    border: '1px solid #40a9ff',
  }
  return (
    <div>
      <div>
        <Flex
          style={boxStyle}
          justify={'space-around'}
          align={'flex-end'}
        >
          <Button type="primary">Primary</Button>
          <Button type="primary">Primary</Button>
          <Button type="primary">Primary</Button>
          <Button type="primary">Primary</Button>
        </Flex>
      </div>
      {/* Hello App 间距组件实现组件间距并且还可以实现内联元素的对齐 */}
      <Space>
        <Button
          type="primary"
          icon={<SearchOutlined></SearchOutlined>}
        >
          CILCK
        </Button>
      </Space>
    </div>
  )
}
export default App

import { YYButton } from './YYantd'
import { Button, Space } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'
function App() {
  return (
    <div>
      <Space>
        <Button>按钮1</Button>
        <Button type="primary">按钮2</Button>
        <Button danger>按钮3</Button>
        <Button
          type="primary"
          danger
        >
          按钮4
        </Button>
        <Button
          type="primary"
          danger
          size="small"
        >
          按钮5
        </Button>
        <Button
          type="primary"
          danger
          size="large"
        >
          按钮6
        </Button>
        <Button
          type="primary"
          danger
          size="large"
          icon={<PlusCircleFilled></PlusCircleFilled>}
        >
          按钮7
        </Button>
      </Space>
      <br></br>
      <Space>
        <YYButton>按钮1</YYButton>
        <YYButton type="primary">按钮2</YYButton>
        <YYButton danger>按钮3</YYButton>
        <YYButton
          type="primary"
          danger
        >
          按钮4
        </YYButton>
        <YYButton
          type="primary"
          danger
          size="small"
        >
          按钮5
        </YYButton>
        <YYButton
          type="primary"
          danger
          size="large"
        >
          按钮6
        </YYButton>
        <YYButton
          type="primary"
          danger
          size="large"
          icon={<PlusCircleFilled></PlusCircleFilled>}
        >
          按钮7
        </YYButton>
      </Space>
    </div>
  )
}
export default App

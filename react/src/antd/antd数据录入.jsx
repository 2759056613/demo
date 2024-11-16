import { useState } from 'react'
import { Rate, Switch } from 'antd'

function App() {
  const [checked, setChecked] = useState(true)
  const [value, setValue] = useState()
  return (
    <div>
      {/* 受控组件 */}
      {/* 直接把set改变状态函数关联在事件的上面就可以了 */}
      <Switch
        size="small"
        checked={checked}
        onChange={setChecked}
      ></Switch>{' '}
      {checked ? 'open' : 'close'}
      <Rate
        value={value}
        onChange={setValue}
      ></Rate>{' '}
      {value + '分'}
    </div>
  )
}
export default App

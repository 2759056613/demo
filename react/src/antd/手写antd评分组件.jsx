import { useState } from 'react'
import { YYRate } from './YYantd'
import { Rate } from 'antd'
function App() {
  const [value1, setValue1] = useState(3)
  const [value2, setValue2] = useState(3)
  const [value3, setValue3] = useState(3)
  const [value4, setValue4] = useState(3)
  return (
    <div>
      {/* 受控组件 */}
      <Rate></Rate> <br></br>
      <Rate
        value={value1}
        onChange={setValue1}
      ></Rate>
      {value1 + '分'}
      <br></br>
      <Rate
        count={6}
        value={value2}
        onChange={setValue2}
      ></Rate>{' '}
      {value2 + '分'}
      <hr></hr>
      <YYRate></YYRate> <br></br>
      <YYRate
        value={value3}
        onChange={setValue3}
      ></YYRate>
      {value3 + '分'}
      <br></br>
      <YYRate
        count={6}
        value={value4}
        onChange={setValue4}
      ></YYRate>{' '}
      {value4 + '分'}
    </div>
  )
}
export default App

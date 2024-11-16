import { message } from 'antd'
import { yymessage } from './YYantd'

function App() {
  //调用方法弹窗，需要以方法为接口
  const handleClick1 = () => {
    message.info('Hello')
  }
  const handleClick2 = () => {
    message.success('OK')
  }
  const handleClick3 = () => {
    yymessage.info('Hello')
  }
  const handleClick4 = () => {
    yymessage.success('OK')
  }
  return (
    <div>
      <button onClick={handleClick1}>点击1</button>
      <button onClick={handleClick2}>点击2</button>
      <hr />
      <button onClick={handleClick3}>点击3</button>
      <button onClick={handleClick4}>点击4</button>
    </div>
  )
}
export default App

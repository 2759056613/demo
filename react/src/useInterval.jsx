import { useInterval } from 'ahooks'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  //解决定时器状态更新导致的 多开问题
  useInterval(() => {
    console.log(123)

    setCount(count + 1)
  }, 1000)
  return <div>{`count:${count}`}</div>
}
export default App

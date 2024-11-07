import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const doubleCount = count * 2 //利用状态快照计算变量
  const handleCilck = () => {
    setCount(count + 1)
  }
  return (
    <>
      <button onClick={handleCilck}>点击</button>
      {count}
      {doubleCount}
      <div>hello App</div>
    </>
  )
}
export default App

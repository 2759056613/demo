import { useRef, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  //记忆值但是不会引发渲染
  //利用记忆值解决定时器多开问题
  const timer = useRef(null)
  const handleClick = () => {
    setCount(count + 1)
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      console.log(123)
    }, 1000)
  }
  return (
    <>
      <div>Hello App</div>
      <button onClick={handleClick}>点击</button>
      {count}
    </>
  )
}
export default App

import { useState, useEffect } from 'react'

function App() {
  const [count, setcount] = useState(0)
  //进行符合纯函数规范的副作用操作
  //在jsx渲染后触发
  //状态更新函数重新渲染jsx之后都会重新执行一次
  //在当前函数组件作用域的最后时机触发 是异步的
  useEffect(() => {
    console.log(count + 'one')
  })
  const handleClick = () => {
    setcount(count + 1)
  }
  // console.log('www')
  console.log(count)

  return (
    <>
      <button onClick={handleClick}>点击</button>
      {count}
      <input type="text" />
      <div>App</div>
    </>
  )
}
export default App

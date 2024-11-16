// function App() {
//   let count = 0
//   const handleClick = () => {
//     count++
//   }
//   return (
//     <>
//       <button onClick={handleClick}>双击</button>
//       <div> hello App</div>
//       {count}
//     </>
//   )
// }
// export default App

import { useState } from 'react'
function App() {
  //创建了状态和修改状态的方法
  //有记忆功能 会记忆变量 并重新加载组件
  let [count, setCount] = useState(0)
  let [count1, setCount1] = useState(1)
  let [count2, setCount2] = useState(2)
  //多状态的记忆方式是数组对
  //不要在逻辑中调用useState，会改变react内部执行逻辑

  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <>
      <button onClick={handleClick}>霜鸡</button>
      <div> hello App</div>
      <p>你双击了{count}次</p>
      {count1} {count2}
    </>
  )
}
export default App

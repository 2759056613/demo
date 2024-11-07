import { useState } from 'react'
//组件通信时传入的为一个对象props，需要你将对象解构
function Button({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>霜及</button>
      <div>{count}</div>
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)
  const handleCilck = () => {
    setCount(count + 1)
  }
  //console.log('重新渲染' + count)
  //每次更改状态值后父组件会和子组件一起渲染完成
  return (
    <>
      <Button
        count={count}
        onClick={handleCilck}
      ></Button>
      <Button
        count={count}
        onClick={handleCilck}
      ></Button>
      <div>hello App</div>
    </>
  )
}
export default App

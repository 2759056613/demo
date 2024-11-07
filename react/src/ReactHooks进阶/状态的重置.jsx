import { useState } from 'react'
//组件通信时传入的为一个对象props，需要你将对象解构
function Counter({ style }) {
  const [count, setCount] = useState(0)
  const handleCilck = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button
        style={style}
        onClick={handleCilck}
      >
        霜及!
      </button>
      <div>{count}</div>
    </div>
  )
}
function App() {
  const [show, setshow] = useState(false)
  const handleCilck = () => {
    setshow(true)
  }
  return (
    <>
      <button onClick={handleCilck}>添加样式</button>
      {/* 当组件的位置没有发生改变时组件的状态会被保留 */}
      {/* 但是添加key属性之后react会将其认为是两个不同组件，不会保留其状态、 */}
      {show ? (
        <Counter
          style={{ border: '1px red solid' }}
          key={1}
        ></Counter>
      ) : (
        <Counter key={2}></Counter>
      )}
      <div>hello App</div>
    </>
  )
}
export default App

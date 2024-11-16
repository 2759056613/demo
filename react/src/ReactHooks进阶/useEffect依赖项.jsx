import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [msg, setmsg] = useState('Hello React')
  //副作用操作分开进行 更新的时候都会触发
  //并且可以通过添加依赖项控制其在特定条件下执行
  //更新的时候,只有对应依赖项发生改变的时候才会触发
  //当依赖项2为空数组时只会进行初始和卸载的触发
  //内部是通过Object.is()实现
  useEffect(() => {
    console.log(count)
  }, [count])
  useEffect(() => {
    console.log(msg)
  }, [msg])
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <>
      <button onClick={handleClick}>双基</button>
      {count}
      <div>Hello App</div>
    </>
  )
}
export default App

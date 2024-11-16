import { useState, useEffect, useRef } from 'react'

//手写useUpdateEffect 在初始化时不会执行
function useUpdateEffect(fun, list) {
  //利用ref设置状态值
  const foolid = useRef(false)
  //卸载还原记忆的值以便下次使用
  useEffect(() => {
    return () => {
      foolid.current = false
    }
  }, [])
  useEffect(() => {
    if (!foolid.current) {
      foolid.current = true
    } else {
      fun()
    }
  }, list)
}
function App() {
  const [count, setCount] = useState(0)
  const handleclick = () => {
    setCount(count + 1)
  }
  useUpdateEffect(() => {
    console.log(123)
  }, [count])
  return (
    <div>
      Hello App
      <button onClick={handleclick}> 点击</button>
      {count}
    </div>
  )
}
export default App

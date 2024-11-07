import { useState, memo, useMemo } from 'react'
//判断props的前后 变化来判断子组件是否需要重新渲染
const Head = memo(function Head() {
  return <div>Hello Head {Math.random()}</div>
})
function App() {
  const [count, setcount] = useState(0)
  const [msg, setMsg] = useState('hello react')
  //计算变量
  // const list = [msg.toLocaleLowerCase(), msg.toLocaleUpperCase()]
  //使用memo记忆缓存（解决引用类型数据对前后两次渲染值相同但是内存不同判断错误的问题）
  //只有依赖项发生改变时值才会发生改变
  const list = useMemo(
    () => [msg.toLocaleLowerCase(), msg.toLocaleUpperCase()],
    msg
  )
  const handleClick = () => {
    setcount(1 + count)
  }
  return (
    <div>
      {count}
      <button onClick={handleClick}>Click</button>
      Hello App
      {/* 子组件未使用父组件状态可以跳过渲染实现性能优化 */}
      <Head list={list}></Head>
    </div>
  )
}
export default App

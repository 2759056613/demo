import { useState, memo } from 'react'
//判断props的前后 变化来判断子组件是否需要重新渲染
const Head = memo(function Head() {
  return <div>Hello Head {Math.random()}</div>
})
function App() {
  const [count, setcount] = useState(0)
  const handleClick = () => {
    setcount(1)
  }
  return (
    <div>
      {count}
      <button onClick={handleClick}>Click</button>
      Hello App
      {/* 子组件未使用父组件状态可以跳过渲染实现性能优化 */}
      <Head></Head>
    </div>
  )
}
export default App

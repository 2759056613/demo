import { useState, memo, useCallback } from 'react'
//判断props的前后 变化来判断子组件是否需要重新渲染
const Head = memo(function Head() {
  return <div>Hello Head {Math.random()}</div>
})
function App() {
  const [count, setcount] = useState(0)
  const [msg, setMsg] = useState('hello react')
  //缓存函数 简化写法 都得添加依赖项
  const fn = useCallback(() => {
    console.log(msg)
  }, [msg])
  //缓存引用对象值
  // const list = useMemo(
  //   () => [msg.toLocaleLowerCase(), msg.toLocaleUpperCase()],
  //   msg
  // )
  const handleClick = () => {
    setcount(1 + count)
  }
  return (
    <div>
      {count}
      <button onClick={handleClick}>Click</button>
      Hello App
      {/* 子组件未使用父组件状态可以跳过渲染实现性能优化 */}
      <Head fn={fn}></Head>
    </div>
  )
}
export default App

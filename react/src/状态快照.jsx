import { useState } from 'react'
import { cloneDeep } from 'lodash'
function App() {
  let [count, setCount] = useState(0)
  const handleClick = () => {
    //？？？？？？
    //自动批处理：所有状态都修改完毕之后才触发渲染
    // setCount(count + 1)0+1

    // setCount(count + 1)0
    // setCount(count + 1)0
    //快照为0
    log
    setCount((c) => {
      console.log(c)
      return c + 1
    })
    //console.log(count)
    setCount((c) => {
      console.log(c)

      return c + 1
    })
    //console.log(count)
    setCount((c) => {
      console.log(c)

      return c + 1
    })
  }
  console.log(count + 'ww')

  return (
    <>
      <button onClick={handleClick}>霜鸡</button>
      <div> hello App</div>
      <p>你双击了{count}次</p>
    </>
  )
}
export default App

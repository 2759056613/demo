import { useRef, useEffect } from 'react'
import { useBoolean } from 'ahooks'

function useHover(element) {
  const [state, { setTrue, setFalse }] = useBoolean(false)
  useEffect(() => {
    //绑定事件切换状态
    element.current.addEventListener('mouseenter', setTrue)
    element.current.addEventListener('mouseleave', setFalse)
    return () => {
      element.current.removeEventListener('mouseenter', setTrue)
      element.current.removeEventListener('mouseleave', setFalse)
    }
  })
  //返回状态
  return state
}

function App() {
  //获取一个元素
  const ref = useRef(null)
  const hover = useHover(ref)
  return (
    <div>
      123
      <div ref={ref}>我上早八</div>
      {hover + ''}
    </div>
  )
}
export default App

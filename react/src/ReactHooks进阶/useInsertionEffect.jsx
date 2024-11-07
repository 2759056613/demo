import { useEffect, useInsertionEffect, useLayoutEffect, useRef } from 'react'

function App() {
  //但是这三个钩子都是在组件内部逻辑执行完毕之后进行
  //区别就在于在dom更新和渲染这两者之间的时机
  const ref = useRef(null)
  //在Dom建立更新之前触发 是为 CSS-in-JS 库的作者特意打造的
  //一般获取不到元素
  useInsertionEffect(() => {
    console.log(ref.current + ' useInsertionEffect')
  })
  console.log('111')

  //dom 和屏幕渲染之后
  useEffect(() => {
    console.log(ref.current.innerHTML + ' useEffect')
  })
  //dom之后屏幕渲染之前
  useLayoutEffect(() => {
    console.log(ref.current.innerHTML + ' useLayoutEffect')
  })
  return <div ref={ref}>Hello App</div>
}
export default App

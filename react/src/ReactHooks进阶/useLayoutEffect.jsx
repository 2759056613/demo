import { useEffect, useLayoutEffect, useState } from 'react'

function App() {
  //useLayoutEffect是同步的 如果你需要在hook内部处理dom就需要使用否则会出现闪屏问题
  //在浏览器重新绘制屏幕之前触发
  //解决了闪屏问题

  //但是因为其是同步的 会存在性能问题
  useLayoutEffect(() => {
    for (let i = 0; i < 100000000; i++) {}
    setmsg('   App Hello')
  })
  //异步 在绘制渲染屏幕之后 如果内部出现dom操作容易出现闪屏现象
  const [msg, setmsg] = useState('Hello App')
  useEffect(() => {
    console.log('111')
  })
  return <div>{msg}</div>
}
export default App

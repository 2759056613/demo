import { useEffect, useState } from 'react'
function Chat({ title }) {
  // 初始加载组件时执行函数内部
  useEffect(() => {
    console.log('进入' + title)

    //组件卸载或者更新时执行函数返回值内的函数操作
    //useEffect可以进行对上个组件的清理善后工作
    //相当于给函数式组件实现了生命周期的功能
    return () => {
      console.log('退出' + title)
    }
  })
  return <div>Hello Chat</div>
}
function App() {
  const [show, setShow] = useState(true)
  const [title, setTitle] = useState('情感')

  const handleClick = () => {
    setShow(false)
  }
  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  return (
    <>
      <div>Hello App</div>
      {show && <Chat title={title}></Chat>}
      <select
        value={title}
        onChange={handleChange}
      >
        <option value="情感">情感</option>
        <option value="体育">体育</option>
      </select>
      <button onClick={handleClick}>关闭聊天室</button>
    </>
  )
}
export default App

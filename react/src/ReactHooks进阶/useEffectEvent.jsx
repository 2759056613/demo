import { useEffect, useState } from 'react'
//想要主题更改不触发 标题修改触发
function Chat({ title, theme }) {
  // 初始加载组件时执行函数内部
  useEffect(() => {
    console.log('进入' + title)
    console.log(theme)

    //组件卸载或者更新时执行函数返回值内的函数操作
    //useEffect可以进行对上个组件的清理善后工作

    return () => {
      console.log('退出' + title)
    }
  }, [title, theme])
  return <div>Hello Chat </div>
}
function App() {
  const [show, setShow] = useState(true)
  const [title, setTitle] = useState('情感')
  const [isdark, setIsdark] = useState(false)
  const handleClick = () => {
    setShow(false)
  }
  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleChange2 = (e) => {
    setIsdark(e.target.checked)
  }
  return (
    <>
      <div>Hello App</div>
      {show && (
        <Chat
          title={title}
          theme={isdark ? '深色' : '浅色'}
        ></Chat>
      )}
      <select
        value={title}
        onChange={handleChange}
      >
        <option value="情感">情感</option>
        <option value="体育">体育</option>
      </select>
      <button onClick={handleClick}>关闭聊天室</button>
      <br />
      <input
        type="checkbox"
        checked={isdark}
        onChange={handleChange2}
      />
      深色主题
    </>
  )
}
export default App

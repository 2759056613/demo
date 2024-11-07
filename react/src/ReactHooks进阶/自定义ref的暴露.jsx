import { useRef, forwardRef, useImperativeHandle } from 'react'

const Text = forwardRef(function Text(props, ref) {
  //转发ref进入之后利用useImperativeHandle实现对ref的自定义暴露
  const inputRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus()
      },
    }
  })
  return (
    <input
      type="text"
      ref={inputRef}
    />
  )
})
function App() {
  const ref = useRef(null)
  const handleClick = () => {
    // ref只释放了focus一个方法
    ref.current.focus()
    //ref.current.style.backgroundColor = 'red'
  }
  return (
    <>
      <button onClick={handleClick}>点击</button>
      {/* 利用ref传入组件内可以自由决定ref传出什么东西是dom还是相关的方法? */}
      <Text ref={ref}></Text>
      <div>App</div>
    </>
  )
}
export default App

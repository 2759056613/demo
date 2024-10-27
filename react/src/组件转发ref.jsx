import { useRef, forwardRef } from 'react'
//forwardRef转发ref进入子组件内
const Text = forwardRef(function Text(props, ref) {
  return (
    <input
      type="text"
      ref={ref}
    />
  )
})
function App() {
  const ref = useRef(null)
  const handleClick = () => {
    ref.current.focus()
    ref.current.style.backgroundColor = 'red'
  }
  return (
    <>
      <button onClick={handleClick}>点击</button>
      <Text ref={ref}></Text>
      <div>App</div>
    </>
  )
}
export default App

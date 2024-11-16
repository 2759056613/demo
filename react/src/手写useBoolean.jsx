import { useRef, useState } from 'react'

// import { useBoolean } from 'ahooks'
function useBoolean(InitialValue = false) {
  // 使用！！转换其他值变为布尔值
  const [state, setState] = useState(!!InitialValue)
  const toggle = () => {
    setState(!state)
  }
  const setTrue = () => {
    setState(true)
  }
  const setFalse = () => {
    setState(false)
  }
  return [state, { toggle, setTrue, setFalse }]
}
function App() {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true)
  return (
    <div>
      <button onClick={toggle}>切换</button>
      <button onClick={setTrue}>True</button>
      <button onClick={setFalse}>False</button>
      {state + ''}
    </div>
  )
}
export default App

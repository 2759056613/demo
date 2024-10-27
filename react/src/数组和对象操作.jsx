import { useState } from 'react'
//import { useImmer } from 'use-immer'
function computer(n) {
  console.log('www')
  return n + 1 + 1 + 1
}
function App() {
  let [count, setcount] = useState(() => computer(0))
  const handleClick = () => {
    setcount(count + 1)
  }
  return (
    <>
      <button onClick={handleClick}>霜鸡</button>
      <div> hello App</div>
      <div>{JSON.stringify(count)}</div>
    </>
  )
}
export default App

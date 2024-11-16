import { Profiler, useState } from 'react'
function Head({ count }) {
  return <div>Hello Head{count}</div>
}
function App() {
  const [count, setCount] = useState(0)
  const onRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime)
  }
  return (
    <div>
      Hello App
      {count}
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        点击
      </button>
      <Profiler
        id="Head"
        onRender={onRender}
      >
        <Head count={count}></Head>
      </Profiler>
    </div>
  )
}
export default App

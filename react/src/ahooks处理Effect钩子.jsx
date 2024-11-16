import { useUpdateEffect } from 'ahooks'
import { set } from 'lodash'
import { useState } from 'react'
function App() {
  const [count, setcount] = useState(0)
  useUpdateEffect(() => {
    console.log(count)
  }, [count])
  const handleClick = () => {
    setcount(count + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>CLICK</button>
    </div>
  )
}
export default App

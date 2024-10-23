import { useState } from 'react'
import { useImmer } from 'use-immer'
function App() {
  let [obj, setobj] = useImmer({
    name: '111',
    age: 11,
    hd: {
      admin: '111',
    },
  })
  const handleClick = () => {
    setobj((draft) => {
      //直接更改参数
      draft.hd.admin = 'www'
    })
  }

  return (
    <>
      <button onClick={handleClick}>霜鸡</button>
      <div> hello App</div>
      <div>{JSON.stringify(obj)}</div>
    </>
  )
}
export default App

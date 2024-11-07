import { useState } from 'react'

function App() {
  const [checked, setChecked] = useState(true)
  //通过绑定事件随表单更新状态最终完成其他业务
  const handleChange = (e) => {
    console.log(e.target.checked)

    setChecked(e.target.checked)
  }
  return (
    <>
      <div>Hello App</div>
      {/* input本身也是一个react内封装好的受控组件，利用组件通信进行控制渲染 */}
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
    </>
  )
}
export default App

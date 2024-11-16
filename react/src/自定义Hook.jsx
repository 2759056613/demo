// import { useEffect, useState } from 'react'
// //主要是对逻辑功能的封装处理
// //hook高度封装的功能性函数
// //还可以采用很多第三方hook库
// //常用的第三方hook：ahooks react-use等
// // function useMouse() {
// //   //获取鼠标在整个视口内的坐标
// //   const [state, setState] = useState({
// //     pageX: NaN,
// //     pageY: NaN,
// //   })
// //   //只在组件开始的时候绑定一次事件
// //   useEffect(() => {
// //     function move(e) {
// //       setState({
// //         pageX: e.pageX,
// //         pageY: e.pageY,
// //       })
// //     }
// //     document.addEventListener('mousemove', move)
// //     //组件卸载时进行清理工作，解绑事件
// //     return ()=>{
// //       //
// //     }
// //   }, [])
// //   return state
// // }
// function App() {
//   const mouse = useMouse()
//   return (
//     <div>
//       Hello App
//       {mouse.pageX} {mouse.pageY}
//     </div>
//   )
// }
// export default App

import { useMouse } from 'ahooks'
function App() {
  const mouse = useMouse()
  return (
    <div>
      Hello App
      {mouse.pageX}
      <span> </span>
      {mouse.pageY}
    </div>
  )
}
export default App

import { lazy, useState, Suspense } from 'react'
// import MyHead from './捕获错误边界.jsx'
// import { useState,lazy } from 'react'
//import 动态引入 返回的是promise对象
const MyHead = lazy(() => import('./捕获错误边界.jsx')) //不加载
function App() {
  const [show, setShow] = useState(false)
  return (
    <div>
      Hello App
      <button
        onClick={() => {
          setShow(true)
        }}
      >
        点击
      </button>
      <Suspense fallback={<div>Loding</div>}>
        {show && <MyHead></MyHead>}
      </Suspense>
    </div>
  )
}
export default App

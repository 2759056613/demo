import React, { createContext, useContext } from 'react'
import { Button, App } from 'antd'

// 嵌套关系
// AppWapper（发送）-> ...->AppCpmponent(使用数据)->Title(接收数据)

const Context = createContext()
function Title() {
  return useContext(Context)
}
function AppComponent() {
  //App提供了提供可消费 React context 的 message.xxx、Modal.xxx、notification.xxx 的静态方法
  //可消费 React context就是可接收来自context的数据
  const { message } = App.useApp()
  //在该方法中使用嵌套组件数据
  const info = () => {
    message.info(<Title />)
  }
  return (
    <>
      {/* 绑定了一个点击事件  点击执行弹窗事件*/}
      <Button
        type="primary"
        onClick={info}
      >
        ALERT
      </Button>
    </>
  )
}
function AppWapper() {
  return (
    <Context.Provider value={123}>
      {/* 这里注意用App组件包裹一下 */}
      <App>
        {' '}
        <AppComponent></AppComponent>
      </App>
    </Context.Provider>
  )
}

export default AppWapper

//较为简单的写法
//如果需要使用跨组件通信就需要用到上面的写法
// import React from 'react'
// import { Button, message } from 'antd'
// const App = () => {
//   const info = () => {
//     //弹出窗口
//     //后缀success是消息图标
//     message.success('澡拟码')
//   }
//   return (
//     <>
//       {/* 绑定了一个点击事件  点击执行弹窗事件*/}
//       <Button
//         type="primary"
//         onClick={info}
//       >
//         ALERT
//       </Button>
//     </>
//   )
// }
// export default App

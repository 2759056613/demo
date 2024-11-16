import { Button, Checkbox, Space, ConfigProvider } from 'antd'
import { useState } from 'react'
function App() {
  const [theme, setTheme] = useState({})
  const handleClick1 = () => {
    setTheme({
      token: {
        colorPrimary: '#424c5b',
        colorInfo: '#424c5b',
      },
    })
  }
  const handleClick2 = () => {
    setTheme({
      token: {
        colorPrimary: 'red',
      },
    })
  }
  return (
    <div>
      <Button onClick={handleClick1}>INS</Button>
      <Button onClick={handleClick2}>RED</Button>
      Hello World <br></br>
      {/* 配置主题 */}
      <ConfigProvider theme={theme}>
        <Space>
          <Button type="primary">点击</Button>
          <Checkbox checked /> 全选
        </Space>
      </ConfigProvider>
    </div>
  )
}
export default App

//主题拓展：可视化主题编辑器
//最终生成json文件

//国际化
// import { ConfigProvider, Calendar } from 'antd'
// import zhCN from 'antd/locale/zh_CN'
// //对日期组件内进行深度转换
// import dayjs from 'dayjs'
// import 'dayjs/locale/zh-cn'
// dayjs.locale('zh-cn')
// function App() {
//   return (
//     <div>
//       Hello World <br></br>
//       <ConfigProvider locale={zhCN}>
//         <Calendar></Calendar>
//       </ConfigProvider>
//     </div>
//   )
// }
// export default App

//使用Context直接将数据从最外传递到最内层
//可以实现跨组件接收数据
import { createContext, useContext } from 'react'
//组件式写法 还可以添加默认值
const Context = createContext(0)
function App() {
  return (
    <div>
      Hello App
      <Context.Provider value={123}>
        <Head></Head>
      </Context.Provider>
    </div>
  )
}
//中间不管有多少层
function Head() {
  return (
    <div>
      Hello Head
      <Title></Title>
    </div>
  )
}

function Title() {
  const count = useContext(Context)
  return (
    <div>
      Hello Title
      {count}
    </div>
  )
}
export default App

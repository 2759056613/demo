import ListProvider from './ListProvider'
import ListHead from './ListHead.jsx'
import ListContent from './ListContent.jsx'
function App() {
  return (
    <div>
      Hello App
      {/* 对两个组件进行状态和逻辑主管和存储传输的组件 */}
      <ListProvider>
        {/* 两个组件，其中的事件逻辑和状态都利用COntext跨组件通信的 */}
        <ListHead></ListHead>
        <ListContent></ListContent>
      </ListProvider>
    </div>
  )
}
export default App

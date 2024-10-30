//引入状态和逻辑
import { useContext } from 'react'
import { ListDispatchContext } from './ListProvider.jsx'
function ListHead() {
  //取逻辑
  const listdispatch = useContext(ListDispatchContext)
  return (
    <>
      <input type="text" />
      <button onClick={() => listdispatch({ type: 'add' })}>添加</button>
    </>
  )
}
export default ListHead

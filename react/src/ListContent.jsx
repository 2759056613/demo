//引入状态和逻辑
import { useContext } from 'react'
//非默认输出必须加大括号！！！！！！！！
import { ListDispatchContext } from './ListProvider.jsx'
import { ListContext } from './ListProvider.jsx'

function ListContent() {
  //取逻辑
  const listdispatch = useContext(ListDispatchContext)
  //取状态
  const list = useContext(ListContext)

  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            {item.text}
            <button onClick={() => listdispatch({ type: 'edit', id: item.id })}>
              编辑
            </button>
            <button
              onClick={() => listdispatch({ type: 'remove', id: item.id })}
            >
              删除
            </button>
          </li>
        )
      })}
    </ul>
  )
}
export default ListContent

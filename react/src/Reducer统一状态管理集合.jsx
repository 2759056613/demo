// import { useState } from 'react'
// function App() {
//   const [list, setlist] = useState([
//     { id: 0, text: 'aaa' },
//     { id: 1, text: 'bbb' },
//     { id: 2, text: 'ccc' },
//   ])
//   const [newlist, setNewlist] = useState(null)
//   const handleChange = (e) => {
//     setNewlist(e.target.value)
//   }
//   const handleClick = () => {
//     setlist([...list, { id: list.length, text: newlist }])
//     setNewlist('')
//   }
//   const handleEdit = (e, id) => {
//     setlist(
//       list.map((item) => {
//         if (item.id === id) {
//           return { ...item, text: 'new' + item.text }
//         } else {
//           return item
//         }
//       })
//     )
//   }
//   const handleRemove = (e, id) => {
//     setlist(
//       list.filter((item) => {
//         if (item.id === id) {
//           return false
//         } else {
//           return true
//         }
//       })
//     )
//   }
//   return (
//     <div>
//       Hello+App
//       <input
//         type="text"
//         onChange={handleChange}
//         value={newlist}
//       />
//       <button onClick={handleClick}>添加</button>
//       {JSON.stringify(list)}
//       <ul>
//         {list.map((item) => {
//           return (
//             <li key={item.id}>
//               {item.text}
//               <button onClick={(e) => handleEdit(e, item.id)}>编辑</button>
//               <button onClick={(e) => handleRemove(e, item.id)}>删除</button>
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }
// export default App

import { useImmerReducer } from 'use-immer'
//将状态逻辑写入外部函数
//将状态和逻辑抽离出来
function listReducer(draft, action) {
  //使用useImmerReducer的话直接就修改draft就可不需要返回值
  //状态变量 ，分发逻辑
  //利用switch进行状态分发
  switch (action.type) {
    case 'add':
      draft.push({ id: draft.length, text: 'dsdd' })
      break
    case 'edit':
      const value = draft.find((item) => item.id === action.id)
      //引用对象直接修改
      value.text = 'new' + value.text
      break
    case 'remove':
      return draft.filter((item) => {
        if (item.id === action.id) {
          return false
        } else {
          return true
        }
      })
      break
  }
}
function App() {
  const [list, listdispatch] = useImmerReducer(listReducer, [
    { id: 0, text: 'aaa' },
    { id: 1, text: 'bbb' },
    { id: 2, text: 'ccc' },
  ])
  return (
    <div>
      Hello+App
      <input type="text" />
      <button onClick={() => listdispatch({ type: 'add' })}>添加</button>
      {JSON.stringify(list)}
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              {item.text}
              <button
                onClick={() => listdispatch({ type: 'edit', id: item.id })}
              >
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
    </div>
  )
}
export default App

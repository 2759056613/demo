import React, { createContext } from 'react'
import { useImmerReducer } from 'use-immer'
// 声明两个Context对状态和逻辑分别进行跨组件传递
export const ListContext = createContext([])
export const ListDispatchContext = createContext(() => {})

// 事件逻辑
function listReducer(draft, action) {
  // 使用useImmerReducer的话直接就修改draft就可不需要返回值
  // 状态变量 ，分发逻辑
  // 利用switch进行状态分发
  switch (action.type) {
    case 'add':
      draft.push({ id: draft.length, text: 'dsdd' })
      break
    case 'edit':
      const value = draft.find((item) => item.id === action.id)
      // 引用对象直接修改
      if (value) {
        value.text = 'new' + value.text
      }
      break
    case 'remove':
      return draft.filter((item) => item.id !== action.id)
  }
}

// 组件通信props接收到内部俩组件
function ListProvider({ children }) {
  const [list, listdispatch] = useImmerReducer(listReducer, [
    { id: 0, text: 'aaa' },
    { id: 1, text: 'bbb' },
    { id: 2, text: 'ccc' },
  ])

  return (
    //传递事件和逻辑
    <ListContext.Provider value={list}>
      <ListDispatchContext.Provider value={listdispatch}>
        {children}
      </ListDispatchContext.Provider>
    </ListContext.Provider>
  )
}

export default ListProvider

// import { useHistoryTravel } from 'ahooks'
// function App() {
//   const {
//     value = '',
//     setValue,
//     backLength,
//     forwardLength,
//     back,
//     forward,
//   } = useHistoryTravel()
//   return (
//     <div>
//       Hello App
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button
//         disabled={forwardLength <= 0}
//         onClick={forward}
//       >
//         前进
//       </button>
//       <button
//         disabled={backLength <= 0}
//         onClick={back}
//       >
//         后退
//       </button>
//       <br></br>
//       {value}
//     </div>
//   )
// }
// export default App

import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { useDynamicList } from 'ahooks'
function App() {
  //动态列表的管理
  const { list, remove, batchRemove, getKey, insert, replace } = useDynamicList(
    ['David', 'Jack']
  )
  return (
    <>
      <div>Hello App</div>
      <br></br>
      {list.map((item, index) => {
        return (
          <div key={index}>
            <input
              placeholder="请输入新元素"
              type="text"
              value={item}
              onChange={(e) => replace(index, e.target.value)}
            />
            <MinusCircleOutlined
              onClick={() => remove(index)}
            ></MinusCircleOutlined>

            <PlusCircleOutlined
              onClick={() => insert(index + 1)}
            ></PlusCircleOutlined>
          </div>
        )
      })}
      {list + ''}
    </>
  )
}
export default App

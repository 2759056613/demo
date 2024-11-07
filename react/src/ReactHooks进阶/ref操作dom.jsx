import { useRef } from 'react'
//利用ref操作原生dom
function App() {
  const list = [
    {
      id: 1,
      text: 'aaa',
    },
    {
      id: 2,
      text: 'bbb',
    },
    {
      id: 3,
      text: 'ccc',
    },
  ]
  const myref = useRef(null)
  const handleClick = () => {
    console.log(myref.current)
    myref.current.style.color = 'red'
  }
  return (
    <>
      <button onClick={handleClick}>红</button>
      <div ref={myref}>App</div>
      {/* 循环内进行dom操作需要在ref内使用回调函数 */}
      {list.map((item) => {
        return (
          <li
            key={item.id}
            ref={(myref) => (myref.style.background = 'red')}
          >
            {item.text}
          </li>
        )
      })}
    </>
  )
}
export default App

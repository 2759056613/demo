// import { useBoolean } from 'ahooks'
// function App() {
//   const [state, { toggle, setTrue, setFalse }] = useBoolean(true)

//   return (
//     <div>
//       <button onClick={setTrue}>setTrue</button>
//       <button onClick={toggle}>toggle</button>
//       <button onClick={setFalse}>setFalse</button>
//       <br />
//       {JSON.stringify(state)}
//     </div>
//   )
// }
import { useToggle } from 'ahooks'
function App() {
  //不仅局限于布尔值
  const [state, { toggle, setLeft, setRight }] = useToggle('傻逼', '慧根')

  return (
    <div>
      <button onClick={setLeft}>setLeft</button>
      <button onClick={toggle}>toggle</button>
      <button onClick={setRight}>setRight</button>
      <br />
      {state}
    </div>
  )
}
export default App

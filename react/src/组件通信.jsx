// function Head() {
//   return <div>head123333 </div>
// }
function Welcome({ count = 'undefind' }) {
  //console.log(props.children)
  return <div>welcome {count}</div>
}
function App() {
  return (
    <>
      <div>App</div>
      {/* 在组件标签加任何属性甚至事件都会认为是组件通信 */}
      <Welcome count={12343}>
        {/* 组件标签的内部的标签都会存在组件的props对象的chidren中 */}
        <div>11111</div>
        <div>22222</div>
      </Welcome>
      <Welcome></Welcome>
    </>
  )
}
export default App

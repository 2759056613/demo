function App() {
  const handleClick = (num) => {
    //高阶函数
    return (e) => {
      console.log(e)
      console.log(num)
    }
  }
  const handleClick2 = (e, num) => {
    console.log(num, e.nativeEvent)
  }
  let count = 0
  return (
    <>
      <div>Hello App</div>
      <button
        style={{ width: 100, height: 100, background: 'red' }}
        value={count}
        onClick={(e) => {
          console.log(e.nativeEvent.type)
          count += 1
          console.log(count)
        }}
      ></button>
      <button onClick={handleClick(123)}>高阶函数传参</button>
      <button onClick={(e) => handleClick2(e, 123)}>箭头函数传参</button>
      <button onClick={handleClick2}>箭头不传参</button>
    </>
  )
}
export default App

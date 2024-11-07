function App() {
  let arr = [
    {
      id: 0,
      text: 'aa',
    },

    {
      id: 2,
      text: 'ccc',
    },
  ]
  return (
    <div>
      App123
      {JSON.stringify(false)}
      <br />
      {/* 数组默认join */}
      {arr.map((item) => {
        console.log(item.id)

        return <li key={item.id}>{item.text}</li>
      })}
      {true && <div>Hello React</div>}
    </div>
  )
}
export default App

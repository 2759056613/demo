//这是在dev分支下
const Qf = () => {
  return <div>qF</div>
}
Qf.Welcome = () => {
  return <div>welcome</div>
}
const { Welcome } = Qf
function App() {
  return (
    <>
      <div>App</div>
      <Qf></Qf>
      <Welcome></Welcome>
    </>
  )
}
export default App

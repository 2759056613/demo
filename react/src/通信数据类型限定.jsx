import PropTypes from 'prop-types'
function Welcome({ count = 0 }) {
  return <div>welcome {count}</div>
}
Welcome.propTypes = {
  count: PropTypes.number,
}
function App() {
  return (
    <>
      <div>App</div>

      <Welcome count={1}></Welcome>
    </>
  )
}
export default App

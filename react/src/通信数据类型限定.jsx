import PropTypes from 'prop-types'
function Welcome({ count, type, icon }) {
  return (
    <div>
      welcome {count} {icon} {type}
    </div>
  )
}
//限定数据类型
//或者限定几种值
Welcome.propTypes = {
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOf(['error', 'qwq']),
  icon: PropTypes.element,
}
function App() {
  return (
    <>
      <div>App</div>

      <Welcome
        count={'111'}
        type="qwq"
        icon={<div>X</div>}
      ></Welcome>
    </>
  )
}
export default App

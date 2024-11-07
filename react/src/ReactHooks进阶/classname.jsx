import classNames from 'classnames'
import style from './局部样式.module.css'
function App() {
  //类名以对象使用
  const mtstyle = classNames({
    box333: true,
    //局部样式
    [style.box2]: true,
  })
  return <div className={mtstyle}>3</div>
}
export default App

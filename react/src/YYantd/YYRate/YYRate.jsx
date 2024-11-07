import classNames from 'classnames'
import './QfRate.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
function YYRate({ count, value, onChange }) {
  //传进来的value只是初始值不做任何处理
  //与外部进行受控传入了外部状态setvalue进行组件受控
  //对于内部的数据存储和更改都需要使用状态
  const [mouseVal, setMouseVal] = useState(value)
  const [clickVal, setClickVal] = useState(value)
  const stars = []
  //根据count渲染小星数量
  for (let i = 0; i < count; i++) {
    const rateClass = classNames({
      'qf-ant-rate-star': true,
      //按value渲染星颜色
      'qf-ant-rate-star-active': mouseVal > i ? true : false,
    })
    stars.push(
      <li
        key={i}
        className={rateClass}
        onMouseEnter={() => handleMouseEnter(i)}
        onClick={() => handleMouseClick(i)}
      ></li>
    )
  }
  //添加交互
  const handleMouseEnter = (id) => {
    setMouseVal(id + 1)
  }
  const handleMouseLeave = (id) => {
    setMouseVal(clickVal)
  }
  //？？？
  const handleMouseClick = (id) => {
    setClickVal(id + 1)
    //不加clickVal的原因是其状态更新是异步操作，每次只能拿到上次的状态值
    //onchang无法拿到最新状态值
    onChange(id + 1)
  }

  return (
    <ul
      className="qf-ant-rate"
      onMouseLeave={() => handleMouseLeave()}
    >
      {stars}
    </ul>
  )
}

//默认值和类型
YYRate.defaultProps = {
  count: 5,
  value: 0,
  onchange: () => {},
}
YYRate.PropTypes = {
  count: PropTypes.num,
  value: PropTypes.num,
}
export default YYRate

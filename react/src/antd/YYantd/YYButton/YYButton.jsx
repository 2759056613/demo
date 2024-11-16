import classNames from 'classnames'
import './YYButton.css'
import PropTypes from 'prop-types'
function YYButton({ children, type }) {
  //各类按钮样式
  const YYButton_style = classNames({
    'YY-ant-btn-color-default': true,
    'YY-ant-btn': true,
    [`YY-ant-btn-color-${type}`]: true,
  })
  return (
    <button className={YYButton_style}>
      <span>{children}</span>
    </button>
  )
}
//添加父子通信默认值
YYButton.defaultProps = {
  type: 'default',
}
//限定数据类型
YYButton.propTypes = {
  type: PropTypes.string,
}
export default YYButton

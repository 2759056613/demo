import './QfMessage.css'
import { InfoOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { createRoot } from 'react-dom/client'
import PropTypes from 'prop-types'
import React from 'react'
//消息弹窗
function YYMessage({ content, icon }) {
  return (
    <div className="qf-ant-message-notice">
      <div className="qf-ant-message-notice-content">
        {icon} {content}
      </div>
    </div>
  )
}
//设置默认值
YYMessage.defaultProps = {
  content: '',
  icon: null,
}
YYMessage.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.element,
}
const yymessage = {
  //创建容器
  wapper: null,
  root: null,
  //点击都会push进入组件
  list: [],
  //完成弹窗需求
  showAndHide(content, icon) {
    //卸载组件
    if (this.root) {
      //卸载渲染的组件数组
      //准备重新渲染新数组
      this.root.unmount()
      this.root = null
    }
    //创建容器
    if (!this.wapper) {
      this.wapper = document.createElement('div')
      this.wapper.className = 'qf-ant-message'
      document.body.appendChild(this.wapper)
    }
    //重新渲染消息数组组件进容器
    if (!this.root) {
      this.root = createRoot(this.wapper)
      this.list.push(
        <YYMessage
          key={this.list.length}
          content={content}
          icon={icon}
        ></YYMessage>
      )
      this.root.render(this.list)
    }
    //延迟消失
    //使用延时器进行操作
    //每次点击执行该函数开一个定时器删除数组中第一个元素和容器中第一个dom
  },
  //功能类似
  info(content) {
    this.showAndHide(
      content,
      <InfoOutlined
        style={{
          backgroundColor: '#4d43a4',
          borderRadius: '50%',
          color: '#fff',
        }}
      />
    )
  },
  success(content) {
    this.showAndHide(
      content,
      <CheckCircleOutlined style={{ color: 'green' }} />
    )
  },
}
export default yymessage

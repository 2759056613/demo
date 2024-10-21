import style from './局部样式.module.css'
//import { Fragment } from 'react'
import './sass.scss'
function App() {
  const username = 'www'
  const app = (
    //行内样式
    <div style={{ width: '100px', height: '100px', backgroundColor: 'green' }}>
      app变量设置
    </div>
  )
  return (
    //fragment可以当作父节点也不会生成新标签
    //可以简写<>
    <>
      <div className="box">
        Hello App
        {/* 对标签内属性值添加js语句时也需要加{} */}
        <label htmlFor={username}>用户名</label>
        <input
          id={username}
          type="text"
          tabIndex="1"
          onClick={() => {}}
          data-id="1"
        />
        {/* 对象和函数不能直接放到jsx的大括号中 */}
        <div>{username}</div>
        {/* <div className={style.box2}>局部样式1</div>
        <div className={style['head-title']}>局部样式2</div>
        <div className={style.headTitle}>局部样式3</div> */}
        <div className="box333">wwwwsass</div>
      </div>
      {app}
    </>
  )
}
//导出
export default App

import { useState } from 'react'
import { useImmer } from 'use-immer'
import style from './任务列表.module.css'
import classNames from 'classnames'
//渲染列表组件
function Renderlist({ arrlist = [], title = '', onChange = function () {} }) {
  return (
    <>
      <h3>
        {title} {arrlist.length}
        {'个'}
      </h3>
      <ul>
        {/* 需要传id */}
        {arrlist.map((list) => (
          <li
            key={list.id}
            className={classNames({ [style.active]: list.checked })}
          >
            <input
              type="checkbox"
              checked={list.checked}
              onChange={(e) => onChange(e, list.id)}
              index={list.id}
            />
            {list.task}
          </li>
        ))}
      </ul>
    </>
  )
}
function List() {
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  //immer 设置数组
  const [arrlist, setArrlist] = useImmer([])
  //计算变量
  const unfinishlist = arrlist.filter((item) => item.checked === false)
  const finishlist = arrlist.filter((item) => item.checked === true)
  //添加方法实现通信
  const handleChecked = (e, id = 0) => {
    setArrlist((draft) => {
      draft[id].checked = e.target.checked
    })
  }
  const handleClick = () => {
    //推入数组 清空表单
    if (value != '') {
      setArrlist((draft) => {
        //注意数组内所存储的数据
        draft.push({ id: arrlist.length, task: value, checked: false })
      })
      setValue('')
    } else {
      alert('表单为空')
    }
  }

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleClick}>添加任务</button>

      <Renderlist
        arrlist={unfinishlist}
        title={'未完成的任务:'}
        onChange={handleChecked}
      ></Renderlist>
      <Renderlist
        arrlist={finishlist}
        title={'已完成的任务:'}
        onChange={handleChecked}
      ></Renderlist>
    </>
  )
}
export default List

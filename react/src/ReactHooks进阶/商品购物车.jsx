import style from './购物车.module.css'
import axios from 'axios'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { useImmer } from 'use-immer'
//数据驱动视图
function Item({ id, name, price, number, active, handleClick, handleClick2 }) {
  return (
    <div className={style.item}>
      <h3>{name}</h3>
      <p>单价：{price}</p>
      <div className={style.count}>
        数量：<span onClick={(e) => handleClick2(e, id, -1)}>-</span> {number}{' '}
        <span onClick={(e) => handleClick2(e, id, 1)}>+</span>
      </div>
      <button
        className={classNames({ [style.active]: active })}
        onClick={(e) => handleClick(e, id)}
      >
        {!active ? '添加购物车' : '取消购买'}
      </button>
    </div>
  )
}
function Card() {
  //请求数据
  const [list, setList] = useImmer([])
  useEffect(() => {
    axios.get('../public/cartData.json').then((res) => {
      setList(res.data.list.map((item) => ({ ...item, active: false })))
    })
  }, [])
  //绑定事件
  const handleClick = (e, id) => {
    setList((draft) => {
      const value = draft.find((item) => item.id === id)
      value.active = !value.active
    })
  }
  const handleClick2 = (e, id, num) => {
    setList((draft) => {
      const value = draft.find((item) => item.id === id)
      if (value.number === 0 && num < 0) {
        value.number = 0
      } else {
        value.number += num
      }
    })
  }
  const sum = list
    .filter((item) => item.active)
    .reduce((s, item) => item.price * item.number + s, 0)

  //计算
  return (
    <div className={style.card}>
      {list.map((item) => (
        <Item
          key={item.id}
          {...item}
          handleClick={handleClick}
          handleClick2={handleClick2}
        ></Item>
      ))}
      <div className={style.num}>总价格：{sum}元</div>
    </div>
  )
}
export default Card

import { useRequest } from 'ahooks'
import axios from 'axios'
import { useState } from 'react'
//异步数据请求
async function getData(num1, num2) {
  const res = await axios.get('../cartData.json')
  return res.data.list
}
function App() {
  const [data, setData] = useState([])
  //run就是getdata函数

  //useRequest还会自动取消高频多次axios请求只留最后一个
  const { run, error, loading, refresh, mutate } = useRequest(getData, {
    manual: true,
    //获取成功结果
    //将数据添加到data状态内
    //ret 异步函数执行成功返回值
    //params 异步函数传参参数
    onSuccess(ret, params) {
      console.log(params)
      //将异步请求数据结果更新到data状态里
      setData(ret)
    },
  })
  if (error) {
    return <div>{error.message}</div>
  }
  if (loading) {
    return <div>Lodaing</div>
  }
  return (
    <>
      {/* 手动发起请求 */}
      <button onClick={() => run(123, 234)}>点击</button>
      {/* refresh会记录上一次异步函数的操作和传递的参数值 */}
      {/* <button onClick={() => mutate([{ id: 1, name: '鸿运当头666' }])}>
        修改数据
      </button> */}

      <button onClick={refresh}>刷新</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}
export default App

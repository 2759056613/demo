import { useRequest } from 'ahooks'
import axios from 'axios'
//异步数据请求
async function getData(num1, num2) {
  const res = await axios.get('../cartData.json')
  //随机排序
  return res.data.list.sort(() => Math.random() - 0.5)
}
function App() {
  const { data, error, loading } = useRequest(getData, {
    //轮询
    //间隔三秒自动发起一次请求、

    // pollingInterval: 3000,

    //延迟loding在2秒内请求到的话就就不会展示Loading
    //防止闪屏

    // loadingDelay: 2000,

    //手动模式
    //  ready

    //聚焦 浏览器页面再次获取焦点时再次请求
    refreshOnWindowFocus: true,
  })
  if (error) {
    return <div>{error.message}</div>
  }
  if (loading) {
    return <div>Lodaing</div>
  }
  return (
    <div>
      Hello App{' '}
      <ul>{data && data.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
    </div>
  )
}
export default App

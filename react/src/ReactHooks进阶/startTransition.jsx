import { useState, startTransition } from 'react'
function List({ query }) {
  const item = []
  const word = 'hello word'
  if (query !== '' && word.includes(query)) {
    //分割检索并添加高亮
    const arr = word.split(query)
    for (let i = 0; i < 10000; i++) {
      item.push(
        <li key={i}>
          {arr[0]}
          <span style={{ color: 'red' }}>{query}</span>
          {arr[1]}
        </li>
      )
    }
  } else {
    for (let i = 0; i < 10000; i++) {
      item.push(<li key={i}>{word}</li>)
    }
  }
  return item
}
function App() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  const handleChange = (e) => {
    //导致输入框输入卡顿 将大量循环渲染任务转换为非紧急任务
    setSearch(e.target.value)
    //将该耗时任务更改为非紧急任务
    // startTransition 可以让你在不阻塞 UI 的情况下更新 state。 意思就是将状态所涉及的渲染和计算都延后处理
    startTransition(() => {
      setQuery(e.target.value)
    })
  }
  return (
    <div>
      Hello App
      <input
        type="text"
        value={search}
        onChange={handleChange}
      />
      {/* 大量计算 导致ui卡顿 */}
      <List query={query}></List>
    </div>
  )
}
export default App

import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  //因为将函数定义在Effect外部每次组件重新加载都会产生一个内存地址不同的新函数导致Effect会每次都会无脑触发

  //解决办法就是将函数定义在callback钩子内,依赖函数内部状态,函数内状态不改变时不改变该函数,同时Effect依赖该函数

  //但是最终的解决办法就是直接将函数定义在Effect内 将函数内部的状态作为其依赖项
  useEffect(() => {
    const foo = () => {
      console.log(count)
    }
    foo()
  }, [count])
  return (
    <>
      <div>Hello App</div>
    </>
  )
}
export default App

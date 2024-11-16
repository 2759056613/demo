import { ErrorBoundary } from 'react-error-boundary'
console.log('加载')

function Head() {
  // classNames()
  return <div>Hello Head</div>
}
function App() {
  return (
    <div>
      Hello App
      {/* 加载错误时使用其他预设元素替换  */}
      <ErrorBoundary fallback={<div>我上早八，加载不出来了</div>}>
        <Head></Head>
      </ErrorBoundary>
    </div>
  )
}
export default App

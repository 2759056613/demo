import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'

function MyComponent({ isVisible, children }) {
  const springs = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
  })
  return (
    <animated.div style={springs}>
      {children}
      <animated.span>{springs.y.to((val) => val.toFixed(0))}</animated.span>
    </animated.div>
  )
}
function App() {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>CLICK</button>
      <MyComponent isVisible={isVisible}>Hello</MyComponent>
    </>
  )
}
export default App

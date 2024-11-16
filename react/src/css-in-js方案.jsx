//使用第三方库实现
import { useState } from 'react'
import styled from 'styled-components'
const Div = styled.div`
  width: 200px;
  height: 200px;
  display: ${({ show }) => {
    return show ? 'block' : 'none'
  }};
  background: red;
  &:hover {
    background: green;
  }
`
function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      Hello App
      <button onClick={() => setShow(!show)}>点击</button>
      <Div show={show}>我上早八</Div>
    </div>
  )
}
export default App

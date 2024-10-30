import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div>
      Hello App
      <input
        type="text"
        value={search}
        onChange={handleChange}
      />
    </div>
  )
}
export default App

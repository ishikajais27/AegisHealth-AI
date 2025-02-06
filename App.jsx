import { useState } from 'react'

import './App.css'
import Front from './Components/Front'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Front/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount((state)=> state + 1);
  }

  return (
    <>
      <h1>TEST</h1>
      <p>count : {count}</p>
      <button onClick={handleClick}> Click Button! </button>
    </>
  )
}

export default App

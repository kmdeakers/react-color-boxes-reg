import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoxList from './BoxList'
import BoxForm from './BoxForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BoxList/>
    </div>
  )
}

export default App

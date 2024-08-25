import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username : 'ankit',
    age : 21,
  }

  let myArr = [1,2,3,5]

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4
      '>Tailwind Test</h1>

 <Card username = 'React Card' someObj = {myArr} btnText = 'click me'/>
 <Card username = 'Ankit Jha' btnText = 'follow me'/>

    </>
  )
}

export default App

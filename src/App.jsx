import React from 'react'
import Sidebar from './components/1.SideBar'
import Choices from './components/2.Choices'
import { useState } from 'react'

function App() {
  const [choices, setChoices] = useState({})
  const [start, setStart] = useState(false) 

  return (
      start ? (
        <main className='main-container'>
          <Sidebar choices={choices} setChoices={setChoices}/>


          {choices.year ? <Choices choices={choices}/> : null}
        </main>
      ) : (
        <div className='start'>
          <h1>Random Movie Generator</h1>
          <button onClick={() => setStart(true)}>Start</button> 
        </div>
      )
    );
  }

export default App

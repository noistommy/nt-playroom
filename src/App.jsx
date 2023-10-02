import { useState } from 'react'
import './App.css'


function App() {
  const [mode, setMode] = useState('light')

  const changeMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')

    document.documentElement.classList = []
    document.documentElement.classList.add(`${mode}-mode`)
  }

  return (
    <>
      <h1 className="bolder logo">
        <span className="ga-success-text">NT</span>
        <span className="ga-yellow-text">PLAY</span>
        ROOM
      </h1>
      <button className="ga-button" onClick={changeMode}>
        <i className="icon left fa fa-sun"></i>
        {mode.toUpperCase()}
      </button>
    </>
  )
}

export default App

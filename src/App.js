import { Switch, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'

import { GlobalState } from './contexts/GlobalState'
import { useState } from 'react'
import Video from './components/Video/index'
function App() {
  const [Global, setGobal] = useState({
    id: 0,
    moment: 0,
  })
  return (
    <>
      <GlobalState.Provider value={{ Global, setGobal }}>
        <Header />
        <Video />
      </GlobalState.Provider>
    </>
  )
}

export default App

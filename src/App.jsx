import { useState } from 'react'
import Header from './components/header/Header'
import Timer from './components/timer/Timer'
import Competitors from './components/competitors/Competitors'
import { VoteModal } from './components/modal/VoteModal'
function App() {

  return (
    <>
     <Header/>
      <Timer/>
    <Competitors/>
    <VoteModal/>
    </>
  )
}

export default App

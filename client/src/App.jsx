import { useState } from 'react'

import './App.css'
import {Routes,Route} from 'react-router-dom'

import Lobbyscreen from "./LobbyScreen/Lobbyscreen"
function App() {

  return (
    <>
      <h1>Hello</h1>
      
     <Routes>
       <Route path="/" element={<Lobbyscreen/>} />
     </Routes>
    </>
  )
}

export default App

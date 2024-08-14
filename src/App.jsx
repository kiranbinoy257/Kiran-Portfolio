import { useState } from 'react'
import Port from './components/port'
// import Portfolio from './Components/front'
import './App.css'
import React,{ Component }from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
<Routes>
<Route path='/' Component={Port}/>
{/* <Route path='/' Component={Portfolio}/> */}

</Routes>
</BrowserRouter>
    </>
  )
}

export default App;

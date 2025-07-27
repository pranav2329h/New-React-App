//import { useState } from 'react'
import Header,{Login,Settings, Userkey} from './Components/Header';

function App() {
  return (
    <>
    <Header/>
    <Login/>
    <Settings/>
      <h1>Code step by step</h1>
    <Fruit/>
    <h1>{Userkey}</h1>
    </>
  )
}
export default App;

function Fruit(){
  return(
    <h1>Apple</h1>
  )
}
import React, { useState } from 'react'
import './Body.css'

export default function App() {

   const [contador,setContador] = useState(2)

   function adicionarContador(){
    setContador(contador + 1)
   }
   function removerContador(){
    setContador(contador - 1)
   }
   
  return (
    <>
    <div className="main">
      <div className="content">
        <button onClick={removerContador}>-</button>
        <p>{contador}</p>
        <button onClick={adicionarContador}>+</button>
      </div>
    </div>
    </>
  )
}

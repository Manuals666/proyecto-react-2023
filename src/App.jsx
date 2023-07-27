import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import "./App.css"

function App() {

 const [criptos, setCriptos] =  useState()
 const API_URL = import.meta.env.VITE_API_URL
  
 useEffect(() => {
   axios.get(`${API_URL}assets`)
     .then((data) => {
      console.log(data)
      setCriptos(data.data.data)
    })
    .catch(() => {
       console.error('La peticion fallo')
    })
  }, [] )

  if(!criptos) return <span>Cargando...</span>

  return (
    <>
    <h1>Lista de Criptomonedas</h1>
    <ol>
    { 
      criptos.map(({id,name, priceUsd }) => (
        <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
      ))  
    }
    </ol>
    </>
  )
}

export default App

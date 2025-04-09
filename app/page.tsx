'use client'

import { useState } from 'react'

export default function Home() {
  const [mensagem, setMensagem] = useState("Clique no botão abaixo!")
  const [contador, setContador] = useState(0)
  const [cor, setCor] = useState(0)

  const cores = ["#e7fd21", "#fb0032", "#327fff", "#ff991f", "#da5fff"]

const handleClick  = () => {
  
    if (contador === 0) {
      setMensagem("Você clicou!")

    } else {

      setMensagem("Você clicou de novo!")

    }

    setContador(contador + 1)
    setCor((cor+1) % cores.length)  
  }

  return (

    <div style = {{ ...estilo.container, backgroundColor: cores[cor]}}>
      <h1 style = {estilo.titulo}>Oi, eu sou a Brenda 👋</h1>

      <p style={estilo.texto}>
        Esse é meu primeiro site feito com Next.js!
      </p>

      <button
        style={estilo.botao}
        onClick = {handleClick}
      
      
      >
        Clique aqui
      </button>

      <p>{mensagem}</p>
      <p>Você clicou {contador} vezes</p>
    </div>
  )
}

const estilo = {
  container: {
    fontFamily: "Arial",
    padding: "2rem",
    textAlign: "center",
    height: "100vh",     // ⬅️ aqui
    width: "100vw"       // ⬅️ aqui

  },
  titulo: {
    fontSize: "2.5rem",
    color: "#1a202c",
    marginBottom: "1rem"
  },
  texto: {
    fontSize: "1.2rem",
    color: "#4a5568",
    marginBottom: "2rem"
  },
  botao: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#2b6cb0",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "1rem"
  }
}
import { useState } from 'react'
import './App.css'

  const nama = "Kantin Shiky"
  const N = 90
  const jam = 9
  const styleKantin = {color: '#1f3a5f', fontSize: '28px'}

function App() {
  return (
    <>
      <h1 className='kantin' style={styleKantin}>{nama}</h1>
      <p>{jam < 12 ? 'Selamat Pagi' : 'Selamat Siang'}</p>
      <p>Saldo awal kartu kantin: Rp. {N * 1000}</p>
      <button disabled>Bayar</button>
    </>
  )
}

export default App

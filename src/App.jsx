import KartuMenu from './components/KartuMenu'
import LabelHarga from './components/LabelHarga'
import Panel from './components/Panel'
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

      <Panel judul='Menu Hari Ini'>
        <KartuMenu nama='Nasi Ayam Geprek' harga={10000 + N * 100}></KartuMenu>
        <KartuMenu nama='Es teh' kategori='Minuman' harga={10000}></KartuMenu>
        <KartuMenu nama='Mie Goreng' harga={10000}></KartuMenu>
      </Panel>
    </>
  )
}

export default App

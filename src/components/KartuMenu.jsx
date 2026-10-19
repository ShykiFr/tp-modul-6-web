import LabelHarga from "./LabelHarga"
import { useState } from "react"

function KartuMenu({
    nama,
    kategori = 'Makanan',
    harga
}) {
    const [count, setCount] = useState(0)

    return (
        <div className="kartu">
            <h3>{nama}</h3>
            <p>{kategori}</p>
            <LabelHarga nilai={harga} />

            <button onClick={() => setCount((count) => count + 1)}>+</button>
            <p>{count}</p>
            <button onClick={() => setCount((count) => count - 1)}>-</button>
        </div>
    )
}

export default KartuMenu
import { useContext } from 'react'
import '../Styles/All.scss'

import { DiceLogicContext } from './DiceContext'

const Result = () => {
  const { result, greater, calculateData } = useContext(DiceLogicContext)

  const showPercentage = (greater.length / result.length) * 100

  return(
    <div className="all-result">
      <h2>Data Hasil Uji Coba</h2>
      <hr id='hr1'/>
      <p id='urutan'>Urutan Uji Coba</p>
      <h3 id='h3-1'>{calculateData.length}</h3>
      <p id='jumlah'>Jumlah Lemparan</p>
      <h3 id='h3-2'>{result.length}</h3>
      <p id='muncul'>Dadu Muncul {'>'} 7</p>
      <h3 id='h3-3'>{greater.length}</h3>
      <p id='persentase'>Persentase Peluang</p>
      <h3 id='h3-4'>{isNaN(showPercentage) ? '0' : showPercentage.toFixed(2)}%</h3>
      <hr id='hr2'/>
    </div>
  )
}

export default Result

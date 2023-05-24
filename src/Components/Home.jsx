import { useContext } from 'react'
import '../Styles/All.scss'

import Dice from './Dice';
import DisplayResult from './DisplayResult'
import Result from './Result';
import { DiceLogicContext } from './DiceContext'

const Home = () => {
  const { result, show, greater } = useContext(DiceLogicContext)

  const isFound = result.find((data) => {
    if (data.totalValue > 7) {
      return true
    }
    return false
  })

  return (
    <div className='home-page'>
      <h1 className='title'>Peluang Dadu Muncul lebih dari 7</h1>
      <div className="dices">
        <Dice />  
      </div>
      <h1 className='info'>Hasil Lemparan Dua Dadu</h1>
      <div className="dice-result">
        {show && result.map((data) => {
            return(
              // key to prevent error of duplicating.
              <DisplayResult key={data.order} data={data}/>
            )
        })}
        {!show && <h3>Tidak ada! Silakan melempar dadu dahulu!</h3>}
      </div>
      <h1 className='info-greater'>Dadu muncul lebih dari 7</h1>
      <div className="result-greater">
        {show && greater.map((data) => {
            return(
              // key to prevent error of duplicating.
              <DisplayResult key={data.order} data={data}/>
            )
        })}
        {!show && <h3>Tidak ada! Silakan melempar dadu dahulu!</h3>}
        {show && !isFound && <h3>Lebih dari dari 7 tidak ditemukan!</h3>}
      </div>
      <Result />
    </div>
  );
}

export default Home

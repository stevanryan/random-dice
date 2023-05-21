import '../Styles/All.scss'

import { useState, useRef, useContext } from 'react'
import ReactDice from 'react-dice-complete'
import { DiceLogicContext } from './DiceContext'

const Dice = () => {
  const { result, setResult, show, setShow } = useContext(DiceLogicContext)

  const reactDice = useRef(null)

  const [number, setNumber] = useState()

  const rollDone = (totalValue) => {
    if (!show) {
      setResult([...result, null])
      return
    }
    const diceObject = {order: result.length, totalValue: totalValue}
    setNumber(totalValue)
    setResult([...result, diceObject])
  }

  const rollAll = (amount) => {
    if (amount <= 1) {
      reactDice.current?.rollAll()
      return
    }

    reactDice.current?.rollAll()
    setTimeout(() => {
      rollAll(amount - 1)
    }, 250);
  }

  const handleManyRoll = (amount) => {
    rollAll(amount)
  }

  const [changeText, setChangeText] = useState('');
  const handleInput = (e) => {
    setChangeText(e.target.value)
  } 

  return (
    <div className='dice-page'>
      <ReactDice
        defaultRoll={6}
        margin={18}
        numDice={2}
        ref={reactDice}
        rollDone={rollDone}
        rollTime={0.3}
        dieSize={120}
        dieCornerRadius={24}
        dotColor={'red'}
        faceColor={'#1f1f1f'}
        disableIndividual={true}
      />
      <button onClick={() => { rollAll(1); !show && setShow(true) }}>Lempar Dadu!</button>
      <div className="advanced">
        <p>Advanced:</p>
        <input type="number" min={0} onChange={handleInput} />
        {changeText > 0 && <button onClick={() => { handleManyRoll(changeText); !show && setShow(true) }}>Lempar Dadu {changeText} kali!</button>}
        {changeText < 1 && <h4 style={{marginBottom: '18px'}}>Isi jumlah lemparan pada kotak di atas sesesuai keinginan</h4>}
        {changeText === 0 && <h1 style={{marginBottom: '18px'}}>Minimal engga 0 lah ya</h1>}
      </div>
      <p>Jumlah angka pada dadu : </p>
      <h1>{number}</h1>
    </div>
  );
}

export default Dice

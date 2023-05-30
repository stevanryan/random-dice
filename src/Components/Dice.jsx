import '../Styles/All.scss'

import { useState, useRef, useContext } from 'react'
import ReactDice from 'react-dice-complete'
import { DiceLogicContext } from './DiceContext'

const Dice = () => {
  const { 
    result, 
    setResult, 
    show, 
    setShow, 
    greater, 
    setGreater, 
    calculateData,
    setCalculateData,
    urutan,
    setUrutan,
    average,
    setAverage } = useContext(DiceLogicContext)

  const reactDice = useRef(null)

  const [number, setNumber] = useState()

  const rollDone = (totalValue) => {
    if (!show) {
      return
    }
    const diceObject = {order: result.length + 1, totalValue: totalValue}
    setNumber(totalValue)
    setResult([...result, diceObject])
    if (totalValue > 7) {
      setGreater([...greater, diceObject])
    }
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

  const [changeText, setChangeText] = useState('')
  const handleInput = (e) => {
    setChangeText(e.target.value)
  }

  const [disable, setDisable] = useState(false)
  const [showReset, setShowReset] = useState(false)

  const handleCalculateData = async () => {
    urutan === 0 && setUrutan(urutan + 1)
    setDisable(true)
    await handleDisable()
    setDisable(false)
    setShowReset(true)
  }

  const handleDisable = () => {
    const time = (changeText * 250) + 500
    return new Promise(resolve => setTimeout(resolve, time))
  }
  
  const handleReset = () => {
    setShow(false)
    setShowReset(false)
    setUrutan(urutan + 1)
    setCalculateData([...calculateData, {diceRolled: result.length, greaterCount: greater.length}])
    setAverage(average + (greater.length / result.length) * 100)
    const reseted = result.filter((data) => data.totalValue < 0)
    setResult(reseted)
    setGreater(reseted)
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
        <input type="number" min={1} onChange={handleInput} />
        {changeText > 0 && 
          <button 
            disabled={disable}
            onClick={() => { 
                handleManyRoll(changeText); !show && setShow(true); handleCalculateData()
              }
            }>{disable ? 'Still running': `Lempar Dadu ${changeText} kali!`}
          </button>}
        {changeText < 1 && <h4 style={{marginBottom: '18px'}}>Isi jumlah lemparan pada kotak di atas sesesuai keinginan</h4>}
      </div>
      <p>Jumlah angka pada dadu : </p>
      <h1>{number}</h1>
      {showReset && show && result.length !== 0 && <div className="feature">
        <button 
          className='reset'
          disabled={disable || result.length === 0}
          onClick={handleReset}
          >{disable ? 'Still running' : 'Reset' }
        </button>
      </div>}
    </div>
  );
}

export default Dice

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
    setOpenData } = useContext(DiceLogicContext)

  const reactDice = useRef(null)

  const [number, setNumber] = useState()

  // const [clicked, setClicked] = useState(false)

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

  const rollAll = async (amount) => {
    if (amount <= 1) {
      reactDice.current?.rollAll()
      return
    }

    // await disableButton()
    
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

  const handleCalculateData = () => {
    // setOpenData(false)
    // setClicked(true)

    // console.log(clicked)
    // if (clicked) {
    //   return
    // }
    urutan === 0 && setUrutan(urutan + 1)
    setCalculateData([...calculateData, {diceRolled: result.length, greaterCount: greater.length}])
  }

  const handleReset = () => {
    // setClicked(!clicked)
    setUrutan(urutan + 1)
    const reseted = result.filter((data) => data.totalValue < 0)
    setResult(reseted)
    setGreater(reseted)
  }

  // const [disable, setDisable] = useState(false)

  // const disableButton = async () => {
  //   setDisable(!disable)
  //   console.log(!disable)
  //   await new Promise(resolve => setTimeout(resolve, 2000))
  //   setDisable(!disable)
  //   console.log(!disable)
  // }

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
        {changeText > 0 && <button disabled={false``} onClick={() => { handleManyRoll(changeText); !show && setShow(true); handleCalculateData()}}>Lempar Dadu {changeText} kali!</button>}
        {changeText < 1 && <h4 style={{marginBottom: '18px'}}>Isi jumlah lemparan pada kotak di atas sesesuai keinginan</h4>}
        {changeText === 0 && <h1 style={{marginBottom: '18px'}}>Minimal engga 0 lah ya</h1>}
      </div>
      <p>Jumlah angka pada dadu : </p>
      <h1>{number}</h1>
      <div className="feature">
        <button className='reset' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Dice

import React from 'react'
import { useState, createContext } from 'react'

export const DiceLogicContext = createContext(null)

const DiceContext = (props) => {
  const [result, setResult] = useState([])

  const [resultGreater, setResultGreater] = useState([])

  // const [totalGreater, setTotalGreater] = useState(0)

  const [show, setShow] = useState(false)

  const handleReset = (diceData) => {
    // const reseted = result.filter((data) => data.order !== diceData.order)
    // setResultGreater(reseted)
    for (let index = 0; index < result.length; index++) {
      result.pop()
    }
  }

  const myFunction = {
    result,
    setResult,
    show,
    setShow,
    resultGreater,
    setResultGreater,

    // totalGreater,
    // setTotalGreater
    handleReset
  }

  return (
    <DiceLogicContext.Provider value={myFunction}>
      {props.children}
    </DiceLogicContext.Provider>
  );
}

export default DiceContext

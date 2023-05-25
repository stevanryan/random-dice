import React from 'react'
import { useState, createContext } from 'react'

export const DiceLogicContext = createContext(null)

const DiceContext = (props) => {
  const [result, setResult] = useState([])

  const [greater, setGreater] = useState([])

  const [calculateData, setCalculateData] = useState([])

  const [show, setShow] = useState(false)

  const [urutan, setUrutan] = useState(1)

  const myFunction = {
    result,
    setResult,
    
    show,
    setShow,

    greater,
    setGreater,

    calculateData,
    setCalculateData,

    urutan,
    setUrutan
  }

  return (
    <DiceLogicContext.Provider value={myFunction}>
      {props.children}
    </DiceLogicContext.Provider>
  );
}

export default DiceContext

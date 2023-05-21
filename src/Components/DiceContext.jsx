import React from 'react'
import { useState, createContext } from 'react';

export const DiceLogicContext = createContext(null)

const DiceContext = (props) => {
  const [result, setResult] = useState([])

  const [resultGreater, setResultGreater] = useState([])

  // const [totalGreater, setTotalGreater] = useState(0)

  const [show, setShow] = useState(false)

  const [foundGreater, setFoundGreater] = useState(false)

  const myFunction = {
    result,
    setResult,
    show,
    setShow,
    foundGreater,
    setFoundGreater,
    resultGreater,
    setResultGreater,

    // totalGreater,
    // setTotalGreater
  }

  return (
    <DiceLogicContext.Provider value={myFunction}>
      {props.children}
    </DiceLogicContext.Provider>
  );
}

export default DiceContext

import { useContext } from "react";
import { DiceLogicContext } from "./DiceContext";

const DisplayResult = ({ data }) => {
  const { order, totalValue } = data

  const { setFoundGreater } = useContext(DiceLogicContext)

  let found = false
  
  if (data !== null) {
    if (data.totalValue > 7) {
      found = true
      // setTotalGreater(totalGreater + 1)
    }
  }

  setFoundGreater(found)

  return (
    <div className="display-result">
      <h1>Lemparan ke-{order}</h1>
      <p>Peluang dadu :</p>
      <h2>{totalValue}/36</h2>
    </div>
  );
}

export default DisplayResult
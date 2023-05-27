const DisplayResult = ({ data }) => {
  const { order, totalValue } = data

  return (
    <div className="display-result">
      <h1>Lemparan ke-{order}</h1>
      <p>Jumlah dua dadu :</p>
      <h2>{totalValue}</h2>
    </div>
  );
}

export default DisplayResult
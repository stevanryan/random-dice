const DisplayResult = ({ data }) => {
  const { order, totalValue } = data

  return (
    <div className="display-result">
      <h1>Lemparan ke-{order}</h1>
      <p>Peluang dadu :</p>
      <h2>{totalValue}/36</h2>
    </div>
  );
}

export default DisplayResult
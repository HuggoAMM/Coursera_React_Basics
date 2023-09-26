function Pears(props) {
  const styles = {
    color: "green",
    fontSize: "40px",
  };

  return (
    <>
      <h1>{props.color}</h1>
      <h2 style={styles}>{props.number}</h2>
    </>
  );
}

export default Pears;

function Apples(props) {
  return (
    <>
      <h1 style={{ color: "yellow", fontSize: "40px", fontWeight: "bold" }}>
        {props.color}
      </h1>
      <h2>{props.number}</h2>
    </>
  );
}

export default Apples;

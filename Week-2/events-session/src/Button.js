function Button() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("type a number");
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  const mouseOver = () => console.log("Mouse Over");
  return (
    <button onClick={handleClick}>Guess the number between 1 and 3</button>
    // (<button onMouseOver={mouseOver}>Mouse over</button>)
  );
}

export default Button;

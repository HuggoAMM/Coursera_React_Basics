import "./App.css";
import React, { useState } from "react";
import Heading from "./Heading";
import MealsProvider from "./providers/MealsProvider";
import MealList from "./components/MealList";
import Counter from "./components/Counter";

function App() {
  // const [word, setWord] = React.useState("hello");

  // function handleClick() {
  //   setWord("Bye");
  // }

  return (
    <div>
      {/* <Heading message={word + "Hugo"} />
      <button onClick={handleClick}>Click Me!</button> */}
      <MealsProvider>
        <MealList />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default App;

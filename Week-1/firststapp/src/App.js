import "./App.css";
import Heading from "./components/Heading";
import Bag from "./components/Bag";
import Apples from "./components/Apples";
import Pears from "./components/Pears";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Heading firstName="Bob" />
      <Heading firstName="Hugo" />
      <Bag children={<Apples color="yellow" number="5" />} />
      <Bag children={<Pears color="green" number="1" />} />
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
    </div>
  );
}

export default App;

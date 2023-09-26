import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header name="Hugo" color="yellow" />
      <Main greet="Good morning" />
      <Sidebar greet="Bye" />
    </div>
  );
}

export default App;

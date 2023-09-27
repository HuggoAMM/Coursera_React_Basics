import ReactPlayer from "react-player";
import "./App.css";

function App() {
  const videoUrl =
    "https://www.youtube.com/watch?v=qQPIVsRQO-o&ab_channel=ESPNDeportes";
  return (
    <div className="App">
      <h1>React Player example</h1>
      <ReactPlayer url={videoUrl} playing={false} volume={0.5} />
    </div>
  );
}

export default App;

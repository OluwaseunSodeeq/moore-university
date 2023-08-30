import Nav from "./Components/Nav/Nav";
import MiniNav from "./Components/MiniNav/MiniNav";
import "./App.css";
import Admission from "./Components/Admission/Admission";
import Campus from "./Components/Campus/Campus";

function App() {
  return (
    <div className="App">
      <Nav />
      <MiniNav />
      <Admission />
      <Campus />
    </div>
  );
}

export default App;

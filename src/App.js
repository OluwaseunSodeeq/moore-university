import Nav from "./Components/Nav/Nav";
import MiniNav from "./Components/MiniNav/MiniNav";
import "./App.css";
import Admission from "./Components/Admission/Admission";
import Campus from "./Components/Campus/Campus";
import Academics from "./Components/Academics/Academics";
import Research from "./Components/Research/Research";
import HealthCare from "./Components/HealthCare/HealthCare";
import Events from "./Components/Events/Events";

function App() {
  return (
    <div className="App">
      <Nav />
      <MiniNav />
      <Admission />
      <Campus />
      <Academics />
      <Research />
      <HealthCare />
      <Events />
    </div>
  );
}

export default App;

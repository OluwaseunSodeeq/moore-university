import { useState } from "react";

import Nav from "./Components/Nav/Nav";
import MiniNav from "./Components/MiniNav/MiniNav";
import "./App.css";
import Admission from "./Components/Admission/Admission";
import Campus from "./Components/Campus/Campus";
import Academics from "./Components/Academics/Academics";
import Research from "./Components/Research/Research";
import HealthCare from "./Components/HealthCare/HealthCare";
import Events from "./Components/Events/Events";
import CampusLife from "./Components/CampusLife/CampusLife";
import Athletics from "./Components/Athletics/Athletics";
import AdmissionSection from "./Components/AdmissionSection/AdmissionSection";
import Prefooter from "./Components/Footer/Prefooter";
import Footer from "./Components/Footer/Footer";

function App() {
  const [open, setOpen] = useState(true);
  const handler = (yes) => setOpen(!yes);
  return (
    <div className="App">
      <Nav open={open} setOpen={setOpen} handler={handler} />
      <Admission />
      <Campus />
      <Academics />
      <Research />
      <HealthCare />
      <Events />
      <CampusLife />
      <Athletics />
      <AdmissionSection />
      <Prefooter />
      <Footer />
    </div>
  );
}

export default App;

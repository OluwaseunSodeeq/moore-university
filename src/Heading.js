const Heading = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.msg}</p>
      <div className="img">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Heading;

/*
import { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [counter, setCounter] = useState(0);
  async function adviceHandler() {
    // const url = `"https://api.adviceslip.com/advice"`
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    // setCounter(counter + 1)
    setCounter((c) => c + 1);
  }
  useEffect(() => {
    adviceHandler();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={adviceHandler}>Get Advice</button>
      <Msg counter={counter} />
      <p>{`U Just have your ${counter} ${
        counter > 1 ? "advices" : "advice"
      }`}</p>
    </div>
  );
}

function Msg(props) {
  return (
    <p>
      You have read <strong>{props.counter}</strong> piece of advice so far
    </p>
  );
}
export default App;

*/

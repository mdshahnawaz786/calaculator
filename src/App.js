import { useEffect, useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Display from "./Components/Display";

function App() {
  const [val, setVal] = useState("");
  const [display, updateDisplay] = useState("");

  function updateVal(valu) {
    setVal(val + valu);
  }

  function evalInput() {
    updateDisplay(eval(val));
    setVal(eval(val));
  }

  function erase() {
    setVal("");
    updateDisplay("");
  }

  useEffect(() => {
    updateDisplay(val);
  }, [val]);

  return (
    <div className="App">
      <Display display={display} />
      <Button updateVal={updateVal} evalInput={evalInput} erase={erase} />
    </div>
  );
}

export default App;

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { useState } from "react";
import Counter from "./counter";

import "./styles.css";

export default function App() {
  const [initial, setInitial] = useState(1);
  const [val, setVal] = useState(initial);

  const [maxx, setMaxx] = useState(1000);
  function assignInitial(val) {
    setInitial((prev) => val);
    setVal((prev) => Math.min(val, maxx));
  }
  function assignMaxx(val) {
    setMaxx((prev) => val);
  }
  function increase() {
    setVal((prev) => Math.min(maxx, prev + 1));
  }
  function decrease() {
    setVal((prev) => prev - 1);
  }
  const [init, setInit] = useState("");
  const [mx, setMx] = useState("");
  const callInit = (e) => {
    e.preventDefault();
    var initalValue = parseInt(init, 10);
    assignInitial(initalValue);
  };
  const callMaxx = (e) => {
    e.preventDefault();
    var maxxVal = parseInt(mx, 10);
    assignMaxx(maxxVal);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <form onSubmit={callInit}>
        <Input
          value={init}
          onChange={(e) => setInit(e.target.value)}
          placeholder="Enter the initial number"
        />
        <Button
          className="SignInButton"
          size="large"
          variant="contained"
          type="submit"
        >
          Send
        </Button>
      </form>
      <form onSubmit={callMaxx}>
        <Input
          className="roomInput"
          value={mx}
          onChange={(e) => setMx(e.target.value)}
          placeholder="Enter the max number"
        />
        <Button
          className="SignInButton"
          size="large"
          variant="contained"
          type="submit"
        >
          Send
        </Button>
      </form>
      <Button
        className="SignInButton"
        size="large"
        variant="outlined"
        color="secondary"
        type="submit"
        onClick={decrease}
      >
        -
      </Button>
      <Button color="secondary" variant="outlined">
        {val}
      </Button>

      <Button
        className="SignInButton"
        size="large"
        variant="contained"
        type="submit"
        onClick={increase}
        color="secondary"
      >
        +
      </Button>
      <Counter value={val} />
    </div>
  );
}

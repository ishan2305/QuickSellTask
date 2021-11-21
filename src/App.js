import { useState } from "react";
import Counter from "./counter";
import axios from "axios";

import "./styles.css";

export default function App() {
  const [initial, setInitial] = useState(1);
  const [val, setVal] = useState(initial);
  const [showtext, setShowtext] = useState(false);

  const [maxx, setMaxx] = useState(1000);
  function assignInitial(val) {
    setInitial((prev) => val);
    setVal((prev) => Math.min(val, maxx));
  }
  function assignMaxx(val) {
    setMaxx((prev) => val);
  }
  function increase() {
    setTimeout(
      () =>
        setShowtext((prev) => {
          return !prev;
        }),
      700
    );
    // setShowtext((prev) => {
    //   return !prev;
    // });
    setVal((prev) => Math.min(maxx, prev + 1));
    var num = Math.min(maxx, val + 1);
    console.log(num);
    const url =
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json";
    const params = JSON.stringify({
      IshanKumar: num
    });
    axios
      .put(url, params, {
        headers: {
          "content-type": "application/json; charset=utf-8"
        }
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    setShowtext((prev) => !prev);
  }
  function decrease() {
    setTimeout(
      () =>
        setShowtext((prev) => {
          return !prev;
        }),
      700
    );
    setVal((prev) => prev - 1);
    var num = Math.min(maxx, val - 1);
    console.log(num);
    const url =
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json";
    const params = JSON.stringify({
      IshanKumar: num
    });
    axios
      .put(url, params, {
        headers: {
          "content-type": "application/json; charset=utf-8"
        }
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    setShowtext((prev) => !prev);
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
        <input
          value={init}
          onChange={(e) => setInit(e.target.value)}
          placeholder="Enter the initial number"
        />
        <button type="submit">Send</button>
      </form>
      <br />
      <p>The current max value is {maxx}</p>
      <br />
      <form onSubmit={callMaxx}>
        <input
          value={mx}
          onChange={(e) => setMx(e.target.value)}
          placeholder="Enter the max number"
        />
        <button type="submit">Send</button>
      </form>
      <br />
      <br />

      <div className="container">
        <div className={showtext ? "aboveCounter" : "disappear"}>
          <p>Saving Counter Value</p>
        </div>
        <div className="horizontal">
          <button id="sub" type="submit" onClick={decrease}>
            -
          </button>
          <button id="val" color="secondary" variant="outlined">
            <input
              value={val}
              className="middle"
              onChange={(e) => setVal(Math.min(maxx, e.target.value))}
            ></input>
          </button>

          <button id="add" type="submit" onClick={increase} color="secondary">
            +
          </button>
        </div>
        <Counter value={val} />
      </div>
    </div>
  );
}

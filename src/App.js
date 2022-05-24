import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    setTime();

    const intervalId = setInterval(() => {
      setTime();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const setTime = () => {
    const currDate = new Date();

    const seconds = currDate.getSeconds();
    const minutes = currDate.getMinutes();
    const hours = currDate.getHours();

    const secRotate = Math.floor((seconds / 60) * 360) + 90;
    const minRotate =
      Math.floor((minutes / 60) * 360 + (seconds / 60) * 6) + 90;
    const hourRotate =
      Math.floor((hours / 12) * 360 + (minutes / 60) * 30) + 90;

    setSec(secRotate);
    setMin(minRotate);
    setHour(hourRotate);
  };

  return (
    <div className="App">
      <div className="clock">
        <div className="clock-face">
          <div
            className="hand hours"
            style={{ transform: `rotate(${hour}deg)` }}
          ></div>
          <div
            className="hand minutes"
            style={{ transform: `rotate(${min}deg)` }}
          ></div>
          <div
            className="hand seconds"
            style={{ transform: `rotate(${sec}deg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;

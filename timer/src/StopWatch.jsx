import { useState, useRef } from "react";
import "./StopWatch.css";

export default function Stopwatch2() {
  //입력받은 시간
  const [hour, setHour] = useState();
  const [min, setMin] = useState();
  const [sec, setSec] = useState();

  return (
    <>
      <div className="result">
        <h1>
          <img src="./images/weniv-logo.svg" alt="weniv"></img>
        </h1>
        <div className="watchBox">
          <h2>TIMER</h2>
          <div className="line"></div>
          {/* <h2>Time passed: {secondsPassed.toFixed(0)}</h2> */}
          <section>
            <article>
              <h3>HRS</h3>
              <div className="colon">
                <input
                  type="text"
                  placeholder="00"
                  onChange={(e) => setHour(e.target.value)}
                />
              </div>
            </article>
            <article>
              <h3>MIN</h3>
              <div className="colon">
                <input
                  type="text"
                  placeholder="00"
                  onChange={(e) => setMin(e.target.value)}
                />
              </div>
            </article>
            <article>
              <h3>HRS</h3>
              <div>
                <input
                  type="text"
                  placeholder="00"
                  onChange={(e) => setSec(e.target.value)}
                />
              </div>
            </article>
          </section>
          <div className="warp">
            <button className="start">Start</button>
            <button className="Reset">Reset</button>
          </div>
        </div>
        <p>ⓒ WENIV Corp.</p>
      </div>
    </>
  );
}

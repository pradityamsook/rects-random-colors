import "./App.css";
import React, { useEffect } from "react";

// function RGBtoHex(r, g, b) {
//   const rHex = r.toString(16);
//   const gHex = g.toString(16);
//   const bHex = b.toString(16);
//   return `#${rHex}${gHex}${bHex}`;
// }

function loopComponent() {
    let componentArr = [];
    for (let index = 0; index < 9; index++) {
        componentArr.push(
            <div className="child">
                <canvas id={`rect${index}`} width="100px" height="100px">
                    {index}
                </canvas>
            </div>
        );
    }
    return componentArr;
}

function App() {
    useEffect(() => {
        for (let index = 0; index < 9; index++) {
            let element = document.getElementById(`rect${index}`);
            let ctx = element.getContext("2d");
            ctx.beginPath();
            ctx.fillStyle = `rgb(
              ${Math.floor(Math.random() * (255 - 0))},
              ${Math.floor(Math.random() * (255 - 0))},
              ${Math.floor(Math.random() * (255 - 0))}
            )`;
            ctx.fillRect(0, 0, 100, 100);
            ctx.stroke();
        }
    });
    return (
        <div>
            <h1>Name: Pradist</h1>
            <div className="container">{loopComponent()}</div>
        </div>
    );
}

export default App;

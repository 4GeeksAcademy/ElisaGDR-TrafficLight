// 1. Import
import React, {useState} from "react";

//2 y 5. Definimos componente y exportamos

export const TrafficLights = () => {

// 3. Código JS (Defino estado)

const [color, setColor] = useState("")

// 4. Return de JS

return (
    <div className="box">
      <div className={`Light light-red ${color == 'red' ? 'glow-red' : ''}`} onClick={() => setColor("red")}></div>
      <div className={`Light light-yellow ${color == 'yellow' ? 'glow-yellow' : ''}`} onClick={() => setColor("yellow")}></div>
      <div className={`Light light-green ${color == 'green' ? 'glow-green' : ''}`} onClick={() => setColor("green")}></div>
    </div>
  );
};
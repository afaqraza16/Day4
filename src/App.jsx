import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("purple");

  return (
    <div
      className="App w-full h-screen flex items-center justify-center "
      style={{ backgroundColor: color }}
    >
      <h1
        style={{ backgroundColor: color }}
        className="text-5xl shadow-slate-600 shadow-2xl text-white uppercase rounded-3xl p-6 font-bold"
      >
        BackGround Changer
      </h1>
      <div className="flex fixed bottom-12 flex-wrap gap-4 py-4 px-4 ">
        <div className="allBtns flex flex-wrap gap-4 bg-slate-200 px-4 py-3 rounded-xl shadow-xl">
          <button
            onClick={() => setColor("red")}
            className="px-4 outline-none py-2 rounded-xl bg-red-600 text-white"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-4 py-2 rounded-xl bg-green-600 text-white"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="px-4 outline-none py-2 rounded-xl bg-yellow-600 text-white"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="px-4 py-2 rounded-xl bg-pink-600 text-white"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("gray")}
            className="px-4 py-2 rounded-xl bg-gray-600 text-white"
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

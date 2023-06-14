import React from "react";
import { useState } from "react";

function Buttons() {
  const [result, setResult] = useState("");

  const HandleClick = (event) => {
    setResult(result.concat(event.target.value));
  };

  const HandleClear = () => {
    setResult("");
  };

  const HandleCalculate = () => {
    setResult(eval(result));
  };

  return (
    <div>
      <div className="bg-slate-400 h-20 rounded-md mx-3 mt-4 ">
        <input
          className="bg-transparent w-72 placeholder:text-white text-4xl flex pt-4 pt-1 pr-2"
          type="text"
          placeholder="00"
          disabled
          value={result}
        ></input>
      </div>

      <div className=" mt-2 flex-col ml-1 p-3">
        <div>
          <button
            className="bg-red-500 h-12 text-white font-bold w-48 text-2xl mr-6 hover:bg-red-400 rounded-md"
            onClick={HandleClear}
            value={"CLEAR"}
          >
            CLEAR
          </button>

          <button
            className="bg-slate-500 ml-6 h-12 text-2xl w-16 text-white rounded-md hover:bg-slate-400 "
            onClick={HandleClick}
            value={"/"}
          >
            /
          </button>
        </div>
        <div className="">
          <button
            className="bg-transparent h-12 text-2xl text-white border-2 w-16 mt-5 hover:bg-slate hover:bg-slate-700 border-slate-400 mr-4 rounded-md"
            onClick={HandleClick}
            value={"7"}
          >
            7
          </button>
          <button
            className="bg-transparent h-12 text-2xl text-white border-2 w-16 mt-5 hover:bg-slate hover:bg-slate-700 border-slate-400 mr-4 rounded-md"
            onClick={HandleClick}
            value={"8"}
          >
            8
          </button>
          <button
            className="bg-transparent h-12 text-2xl text-white border-2 w-16 mt-5 hover:bg-slate hover:bg-slate-700 border-slate-400 mr-4 rounded-md"
            onClick={HandleClick}
            value={"9"}
          >
            9
          </button>
          <button
            className="bg-slate-500 h-12 text-2xl text-white  w-16 mt-5 hover:bg-slate hover:bg-slate-400   rounded-md"
            onClick={HandleClick}
            value={"*"}
          >
            *
          </button>
        </div>

        <div className="">
          <button
            className="bg-transparent h-12 text-2xl text-white border-2 w-16 mt-5 hover:bg-slate hover:bg-slate-700 border-slate-400 mr-4 rounded-md"
            onClick={HandleClick}
            value={"4"}
          >
            4
          </button>
          <button
            className="bg-transparent h-12 text-2xl text-white border-2 w-16 mt-5 hover:bg-slate hover:bg-slate-700 border-slate-400 mr-4 rounded-md"
            onClick={HandleClick}
            value={"5"}
          >
            5
          </button>
          <button
            className="bg-transparent h-12 text-2xl text-white border-2 w-16 mt-5 hover:bg-slate hover:bg-slate-700 border-slate-400 mr-4 rounded-md"
            onClick={HandleClick}
            value={"6"}
          >
            6
          </button>
          <button
            className="bg-slate-500 h-12 text-2xl text-white  w-16 mt-5 hover:bg-slate hover:bg-slate-400   rounded-md"
            onClick={HandleClick}
            value={"+"}
          >
            +
          </button>
        </div>

        <div className="">
          <button
            className="bg-transparent h-12 text-2xl text-white border-2 w-16 mt-5 hover:bg-slate hover:bg-slate-700 border-slate-400 mr-4 rounded-md"
            onClick={HandleClick}
            value={"1"}
          >
            1
          </button>
          <button
            className="bg-transparent h-12 text-2xl text-white border-2 w-16 mt-5 hover:bg-slate hover:bg-slate-700 border-slate-400 mr-4 rounded-md"
            onClick={HandleClick}
            value={"2"}
          >
            2
          </button>
          <button
            className="bg-transparent h-12 text-2xl text-white border-2 w-16 mt-5 hover:bg-slate hover:bg-slate-700 border-slate-400 mr-4 rounded-md"
            onClick={HandleClick}
            value={"3"}
          >
            3
          </button>
          <button
            className="bg-slate-500 h-12 text-2xl text-white  w-16 mt-5 hover:bg-slate hover:bg-slate-400   rounded-md "
            onClick={HandleClick}
            value={"-"}
          >
            -
          </button>
        </div>

        <div>
          <button
            className="bg-slate-500 h-12 text-2xl text-white  w-16 mt-5 hover:bg-slate hover:bg-slate-400   rounded-md font-bold "
            onClick={HandleClick}
            value={"."}
          >
            .
          </button>
          <button
            className="bg-transparent h-12 text-2xl text-white border-2 w-16 mt-5 hover:bg-slate hover:bg-slate-700 border-slate-400 mr-4 rounded-md ml-4"
            onClick={HandleClick}
            value={"0"}
          >
            0
          </button>
          <button
            className="bg-teal-500 h-12 text-2xl text-white  w-36 mt-5 hover:bg-teal-700 rounded-md"
            onClick={HandleCalculate}
            value={"="}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;

import { useState } from "react";
import React from "react";
import Todolist from "./Todolist";

function App() {
  const [inputlist, setinputlist] = useState("");
  const [items, setitems] = useState([]);

  function itemevent(event) {
    setinputlist(event.target.value);
  }

  function listofitems() {
    setitems((olditems) => {
      return [...olditems, inputlist];
    });
    setinputlist(" ");
  }

  function deleteitems(id) {
    setitems((olditems) => {
      return olditems.filter((arrayelement, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1> ToDo list </h1>
          <br />

          <input
            type="text"
            placeholder="Add Items"
            onChange={itemevent}
            value={inputlist}
          />

          <button onClick={listofitems}>+</button>

          <ol>
            {items.map((itemval, index) => {
              return (
                <Todolist
                  text={itemval}
                  key={index}
                  id={index}
                  onselect={deleteitems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
export default App;

import "./App.css";
import { useState } from "react";
import moment from "moment";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {moment().format("dddd")} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            if (toDo === "" || toDo === " " || toDo === "  ") {
            } else {
              setToDos([
                ...toDos,
                { id: Date.now(), text: toDo, status: false, deleted: false },
              ]);
            }
          }}
          className="fas fa-plus"
        ></i>
      </div>

      <div className="todos">
        {toDos.map((obj) => {
          if (obj.deleted === true) {
            return null;
          } else {
            return (
              <div className="todo">
                <div className="left">
                  <input
                    onChange={(e) => {
                      console.log(e.target.value);
                      console.log(obj);

                      setToDos(
                        toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = e.target.checked;
                          }
                          return obj2;
                        })
                      );
                    }}
                    value={obj.status}
                    type="checkbox"
                    name=""
                    id=""
                  />

                  <p> {obj.text}</p>
                </div>
                <div className="right">
                  <i
                    onClick={() => {
                      setToDos(
                        toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.deleted = true;
                            obj2.text = "";
                          }
                          return obj2;
                        })
                      );

                      console.log(obj);
                    }}
                    className="fas fa-times"
                  ></i>
                </div>
              </div>
            );
          }
        })}

    <h1 className="cmplTsk" >Completed Tasks</h1>
       
        {toDos.map((obj) => {
          if (obj.status && obj.deleted === false) {
            return <h1 className="task" >{obj.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;

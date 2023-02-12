import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    // const num = [1,2,3,4]
    // if i want to add number 5 and make a new array with array num,
    // i can do [5, ...num]
    // then, it would be [5,1,2,3,4]
    setTodo("");
    console.log(toDos);
  }
  return (
   <div>
      <h1>My To Dos {toDos.length}</h1>
      <h2>{}</h2>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          type="text" 
          value={toDo}
          placeholder="Write your to do" />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.reverse().map((item, index)=> 
          <li key={index}>
            {item}
          </li>)}
      </ul>
   </div>
  );
}

export default App;

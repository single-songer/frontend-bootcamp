import { useState } from "react";

export function Todo() { 
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const addItem = () => { 
    const t = text.trim()
    if (!t) return;
    setList([...list, t]);
    setText("");
  }
  const removeItem = (index) => setList(list.filter((_, i) => i !== index));
  return (
    <>
      <h1>Todo</h1>
      <input type="text" placeholder="Add a new task" id="task_input" value={text} onChange={e => setText(e.target.value)}/>
      <button id="add" type="add-button" onClick={addItem}>Add Task</button>
      <ul>
        { 
          list.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => removeItem(index)}>删除</button>
            </li>
          ))
        }
      </ul>
    </>
  
  )
}
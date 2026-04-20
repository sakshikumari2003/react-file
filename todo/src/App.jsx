// import React from 'react'
import React, {useState } from 'react'
import { nanoid } from "nanoid"; 

const App = () => {
  const [todos, settodos] = useState([ 
    {id:1,title:"do your work",inComplete:false},
  ]);
  const [title, settitle] = useState("");
  const SubmitHandler=(e)=>{
    e.preventDefault();

    const newtodos={
      id: nanoid(),
      title,
      inComplete:false,
    };
    settodos([...todos,newtodos]);
    settitle("");
  }
  const rendertodo=todos.map((todo)=>{
    return <li key={todo.id}>{todo.title}</li>
  });

  return (
    <div>
      <h1>create tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input onChange={(e)=>settitle(e.target.value)} type="text" value={title} placeholder='task' />
        <br />
        <button>create todo</button>
      </form>
      <hr />
      <h1>pending todo</h1>
      {rendertodo}
    </div>
  )
}

export default App
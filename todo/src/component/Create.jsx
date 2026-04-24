import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
    const todos=props.todos;
    const settodos=props.settodos;

    const [title, settitle] = useState("");
     const SubmitHandler=(e)=>{
    e.preventDefault();

    const newtodos={
      id: nanoid(),
      title,
      isComplete:false,
    };
    settodos([...todos,newtodos]);
    settitle("");
  }
  return (
    <> <h1>create tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input onChange={(e)=>settitle(e.target.value)} type="text" value={title} placeholder='task' />
        <br />
        <button>create todo</button>
      </form>
      </>
  )
}

export default Create
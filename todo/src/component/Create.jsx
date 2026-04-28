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
    <div className="w-[60%] p-10 ">
       <h1 className="mb-10 text-5xl font-thin">Set <span className="text-red-400">Reminder</span> for <br /> task</h1>
      <form onSubmit={SubmitHandler}>
        <input className="p-2 outline-0 border-b w-full text-2xl font-thin" onChange={(e)=>settitle(e.target.value)} type="text" value={title} placeholder='task' />
        <br />
        <button className="text-xl px-10 py-2 border rounded mt-5">create todo</button>
      </form>
      </ div>
  )
}

export default Create
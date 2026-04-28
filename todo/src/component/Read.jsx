// import "./Read.css"
const Read = (props) => {
    const todos=props.todos;
    const settodos=props.settodos;
    const DeleteHandler=(id)=>{
       const DeleteTodos= todos.filter((todo)=>todo.id!=id);
       settodos(DeleteTodos);
    }

    const rendertodo=todos.map((todo)=>{
    return <li key={todo.id} className="flex justify-between item-center p-3 bg-gray-900 rounded mb-4">
      <span className="text-xl font-thin">{todo.title}</span> 

      <button onClick={()=>DeleteHandler(todo.id)} className="font-thin text-white-400 text-sm bg-red-800  w-12 " >
         Delete</button>
      </li>
    // why we use () => ?
    // 👉 Because we want to pass a value (todo.id) to function
   // 👉 AND we don’t want it to run immediately
  });
  return (
    <div className="w-[40%] p-10" >
      <h1 className="mb-10 text-5xl font-thin"><span className="text-yellow-600">pending</span> todo</h1>
      <ol>{rendertodo}</ol>
      </div>
  )
}

export default Read
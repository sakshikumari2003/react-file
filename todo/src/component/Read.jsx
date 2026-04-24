// import "./Read.css"
const Read = (props) => {
    const todos=props.todos;
    const settodos=props.settodos;
    const DeleteHandler=(id)=>{
       const DeleteTodos= todos.filter((todo)=>todo.id!=id);
       settodos(DeleteTodos);
    }

    const rendertodo=todos.map((todo)=>{
    return <li key={todo.id}className="flex justify-between items-center bg-white shadow-md p-3 rounded-lg mb-3">
      {todo.title}

      <button onClick={()=>DeleteHandler(todo.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition">
        delete</button>
      </li>
    // why we use () => ?
    // 👉 Because we want to pass a value (todo.id) to function
   // 👉 AND we don’t want it to run immediately
  });
  return (
    <div className="max-w-md mx-auto mt-6 ">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">pending todo</h1>
      <ol>{rendertodo}</ol>
      </div>
  )
}

export default Read
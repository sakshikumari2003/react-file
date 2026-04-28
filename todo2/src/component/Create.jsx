import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Create = (props) => {
    const todos=props.todos;
    const settodos=props.settodos;

     const {register,
    handleSubmit,reset,formState:{ errors }}= useForm();

   
     const SubmitHandler=(data)=>{
        data.isComplete=false;
        data.id=nanoid();


        const copytodos=[...todos];
        copytodos.push(data);
        settodos(copytodos);
        reset();
    
  }
  
//   console.log(errors.title.message);
  return (
    <div className="w-[60%] p-10 ">
       <h1 className="mb-10 text-5xl font-thin">Set <span className="text-red-400">Reminder</span> for <br /> task</h1>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input {...register("title" , {required:"task can not be writen",})} className="p-2 outline-0 border-b w-full text-2xl font-thin"  type="text"  placeholder='task' />
        {/* {errors && errors.title && errors.title.message && <small>{errors.title.message}</small> }  */}
        <small>{errors?.title?.message}</small>
        <br />
        <button className="text-xl px-10 py-2 border rounded mt-5">create todo</button>
      </form>
      </ div>
  )
}

export default Create
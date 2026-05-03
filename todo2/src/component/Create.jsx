import { toast  } from "react-toastify";
import { nanoid } from 'nanoid'
import {useForm} from "react-hook-form"



const Create = (props) => {
    const todos=props.todos;
    const settodos=props.settodos;
     const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } =useForm();
   
    const SubmitHandler=(data)=>{
        data.isComplete=false;
        data.id=nanoid();

        const copytodos =[...todos];
        copytodos.push(data);
        settodos(copytodos);

        toast.success("todo created! ")

        reset();
    };
    // console.log(errors.title.message)
//
  return (
    <div className=" w-[60%] p-10 mx-auto">
        <h1 className=" mb-10 text-5xl font-thin">Set <span className="text-red-500">Reminder</span> for <br /> task</h1>
        <form  onSubmit={handleSubmit(SubmitHandler)}>
            <input {...register("title",{required:"title can not be empty"})} className="border-b p-2 outline-0 w-full text-2xl font-thin" type="text"  placeholder="title" />
            {errors&& errors.title && errors.title.message && <small className="text-red-600">{errors.title.message}</small>}
            <br />
            <br />
            <button className="text-xl px-10 py-2 border rounded mt-5">Create todo</button>
        </form>

    </div>
  )
}

export default Create
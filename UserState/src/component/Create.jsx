import { useState } from "react";

const Create = (props) => {
    console.log(props)
    const[fullname,setfullname]=useState("");
  const[age,setage]=useState(1);


    const SubmitHandler=(e)=>{
    e.preventDefault();

    const newUser=[fullname,age];
    console.log(newUser);
  };

  // Creates state to store input value
  
  return (
    <div>  <form onSubmit={SubmitHandler}>
     <h1>form</h1>
   
    <input onChange={(ele)=>setfullname(ele.target.value) } value={fullname} type="text" placeholder='name' />
    <input onChange={(ele)=>setage(ele.target.value)} type="Number" value={age} placeholder='age'/>
    <button >Submit</button>
   </form></div>
  )
}

export default Create
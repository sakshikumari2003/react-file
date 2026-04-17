// render of object
import React from 'react'


const App = () => {
  const profile=[{name:"ayu",age:13},
    {name:"hera",age:44},
    {name:"soti",age:18}
  ]
  const uprofile=profile.map((profil,index)=>{
    return(
      <li key={index}>
        <span>name:{profil.name}</span> <br />
        <small>age:{profil.age}</small>
        
      </li>
    );
  });
  return (
    <div>
      <ol>{uprofile}</ol>
    </div>
  )
}

export default App
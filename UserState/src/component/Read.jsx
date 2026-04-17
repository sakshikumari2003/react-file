import React from 'react'

const Read = (props) => {
    const users=props.us;
    const setusers=props.set;
    console.log(props);
   
      const renderUser=users.map((user,index)=>{
       return <li key={index}>{user.name}</li>
     });
  return (
    
    <div>
        <h1>User Data</h1>
        <ol>{renderUser}</ol></div>
  )
}

export default Read
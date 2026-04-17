import React, {useState } from 'react'
import Create from './component/Create';
import Read from './component/Read';

const App = () => {
  const[users,setusers]=useState([
       {name:"sakshi",age:12},
       {name:"palak",age:13},
       { name:"gupta",age:11}
     ]);

    
  // 
  return (
    <>
    <Create/>
    <hr />
    <Read us={users} set={setusers}/>
    </>
    
  )
}

export default App
// import React from 'react'
import React, {useState } from 'react'

import Create from './component/Create';
import Read from './component/Read';

const App = () => {
  const [todos, settodos] = useState([ 
    {id:1,title:"do your work",isComplete:false},
  ]);
  
 
  

  return (
    <div className='text-white flex w-screen h-screen bg-gray-800 p-10'>
     
        <Create todos={todos} settodos={settodos} />
      <hr />
      <Read todos={todos} settodos={settodos}/>
      
      
    </div>
  )
}

export default App
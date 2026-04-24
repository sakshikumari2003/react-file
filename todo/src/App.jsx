// import React from 'react'
import React, {useState } from 'react'

import Create from './component/Create';
import Read from './component/Read';

const App = () => {
  const [todos, settodos] = useState([ 
    {id:1,title:"do your work",isComplete:false},
  ]);
  
 
  

  return (
    <div className='min-h-screen bg-gray-600  flex justify-center items-start pt-10 bg-gradient-to-r'>
      <div className="w-full max-w-md">
        <Create todos={todos} settodos={settodos} />
      <hr />
      <Read todos={todos} settodos={settodos}/>
      </div>
      
    </div>
  )
}

export default App
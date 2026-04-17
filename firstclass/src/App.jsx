import React from 'react'
const butt =()=>{
  alert("button click")
};
const buttyping =(msg)=>{
  alert(msg);
};
// react me function call nahi hota means agar humlog onclick me function likhege to bus nam likhege uske sath bracket nahi


const App = () => {
  return (
    <>
    <div>App | Hello World</div>
    <button onClick={butt}>click here</button>
    {/* fuction call agar karte h to call time bracket nahi dalege  agar karte h to bina click button kiye uske andar ka parameter chal jaega lekin hume parameter dalana ho to, to hum ek function banege usme uska parameter dalege ya to arrow function karke onclick me use karege example */}
    <button onClick={()=>buttyping("hello kese ho")}>click</button>

    </>
  )
}

export default App
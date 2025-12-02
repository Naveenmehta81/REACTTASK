import React from 'react'
import { useState , createContext , useContext } from 'react';

const usercontext = createContext();

 function Component1()  {
    const[user , setUser ] = useState("Naveen");
  return (
    <div>
        <usercontext.Provider  value={user}>
                           <h1>{`hello  ${user}!`}</h1>
        <Component2/>
        </usercontext.Provider>
       

    </div>
  )
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}
function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}function Component4() {
 const user = useContext(usercontext);

  return (
    <>
      <h1>Component 4</h1>
      <h2>{` ${user} you got a usecontext concept `}</h2>
    </>
  );
}


export default  Component1 ;
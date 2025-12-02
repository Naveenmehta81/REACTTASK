import React from 'react'
import { useState } from 'react';

function PropsDrilling () {
    const[User , setUser] = useState("Naveen");
  return (
    <div>
        <h1>`hello champ ${User}`</h1>
        <Component2 user={User}/>

    </div>
  )
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}
function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
    <h2>{`heloo ${user} again!`}</h2>
    </>
  );
}





export default PropsDrilling;  

// in this we understand props drilling 
//Even though component 2 did not need the state, it had to pass the state along so that it could reach component 3.
// SO now overcome to it many solution but we go to our hook is - usecontext    
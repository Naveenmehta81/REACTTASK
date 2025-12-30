import React, { useEffect } from "react";
import { useState, useRef } from "react";

function Useref() {
     const[text , setText] = useState(" ");
     const previousinputstate = useRef(" ");

//   const [Timer, setTimer] = useState(0);
//   // const countref = useRef(0);

//   // function handleclick(){
//   //     countref.current = countref.current +1;
//   //     console.log("clilked" , countref.current ,"iteme");
//   // }

//   const timeref = useRef(null);
//   function startimer() {
//     timeref.current = setInterval(() => {
//       setTimer((Timer) => Timer + 1);
//     }, 1000);
//   }
//   function stoptimer() {
//     clearInterval(timeref.current);
//     timeref.current = null;
//   }
//   function resetimer() {
//     stoptimer();
//     setTimer(0);
//   }

    useEffect( () =>{
        previousinputstate.current = text;

    } , [text]);


   function texthandel(e){
          setText(e.target.value);
   }

  return (
    <div>
      {/* <h1>stopwatch :{Timer} second</h1>
      <br />
      <button onClick={startimer}>Start</button>
      <br />
      <br />
      <button onClick={stoptimer}>stop</button>
      <br />
      <br />
      <button onClick={resetimer}>reset</button>
      <br />
      <br />
      <button onClick={handleclick}>click me </button> */}
          


         <input
         type="text"
         value={text}
         onChange={texthandel}
         />

         <h2>current text : {text}</h2>
         <h2>previous text : {previousinputstate.current}</h2>

    </div>
    
  );
}

export default Useref;

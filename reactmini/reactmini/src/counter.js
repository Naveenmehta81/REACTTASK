import React, { use } from "react";
import "./counter.css";
import { useState } from "react";

function IncordecCounter() {
  const[count , setcount] = useState(0);

   function handeldecrement(){
      setcount(count-1);
   }

   function handelIncrement(){
       setcount(count +1);
   }
   function resethandler(){
       setcount(0);
   }


    return (
        <div className="counter-container">
            <h1 className="counter-title">increment and decrement</h1>

            <div className="counter-wrapper">

                <div>
                    <button type="number" className="btn-decrement-btn" onClick={handeldecrement}>-</button>
                </div>

                <div className="counter-value">
                    {count}
                </div>

                <div>
                    <button type="number" className="btn-increment-btn" onClick={handelIncrement}>+</button>
                </div>

                <div>
                    <button type="submit" className="btn reset-btn" onClick={resethandler}>reset</button>
                </div>

            </div>
        </div> 
    );
}

export default IncordecCounter;


// i make a counter app 
// i face doubt in how i display my input so it solve by useState . 
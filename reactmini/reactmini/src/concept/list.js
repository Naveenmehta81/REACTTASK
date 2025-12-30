import React from "react";




function Listofyear(){
  let year = [12 , 13 , 14 ,15 , 16 ,18];
   const yearlist = year.map((date) =>{
   return <li>{date}</li>
});
    return(
        <div>
         <ul>{yearlist}</ul>
         <h1>list up here</h1>
         
        </div>
    )
}



export default Listofyear;
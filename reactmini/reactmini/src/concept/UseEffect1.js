import React, { useEffect, useState } from "react";




function Timer(){
    const[time , settime ] = useState(0);


    useEffect(() =>{
        setInterval(() =>{
            settime((time) => time + 1);
        }, 1000);
    },[]);


    return(
        <p>here now time is {time}</p>
    )
}


export default Timer;
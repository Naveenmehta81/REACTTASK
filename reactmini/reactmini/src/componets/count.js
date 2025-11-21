import { useState } from "react";



function Count(){
    const[count , setcount] = useState(0);
    return(
        <div>
            <p>{count}</p>
            <button onClick={() => setcount(count+1)}>increase</button>
        </div>
    );

}


function InputBox() {
  const [text, setText] = useState("");

function handelcahnge(e){
  setText(e.target.value);
}




  return (
   <form>
    <label>Enter your name:
     <lnput
     type = "text"
     value={text}
     onChange={handelcahnge}
     />
    </label>
   </form>
  );
}


//export default Count;
export default InputBox;
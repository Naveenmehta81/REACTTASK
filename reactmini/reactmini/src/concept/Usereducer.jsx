import React, { act } from 'react'
import { useReducer } from 'react'


function  reducer(state , action ){
           switch(action.type){
               case 'increment' :{
                return{
                    name : state.name,
                    age : state.age + 1
                }
               }
               case 'namechange' :{
                return{
                    name : action.nextName,
                    age : state.age  
                }
               }
           }

}


const initialstate  = { name : 'naveen' , age : 23 };





function  Usereducer () {
       const[state , dispatch ] = useReducer(reducer , initialstate  );
  

       function handelclick(){
      dispatch({type : 'increment'});
}

function handleinput(event){
        dispatch ({
            type : "namechange",
            nextName : event.target.value
        });
}

  return (
    <div>
        <input
        type='text '
         value={state.name}
         onChange={handleinput}/>
        <button onClick={handelclick}>Increment age </button>
        <p> {state.name} after jan your age is {state.age}</p>
    </div>
  )
}


export default  Usereducer;
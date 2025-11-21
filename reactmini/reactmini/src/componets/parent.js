function Son(props) {
  return (
    <div style={{background: 'lightgreen'}}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Daughter(props) {
  const {brand, model} = props;
  return (
    <div style={{background: 'lightblue'}}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
    </div>
  );
}


function clickhandeler(){

    console.log("cliked");
}



function Parent(){
    return(
        <div>            <h1>MY son is </h1>
            <Son>
                 <p>
          hey i am naven 
        </p>
            </Son>
            <Daughter>
                  <p>
          This was written in the Parent component,
          but displayed as a part of the Daughter component
        </p>

            </Daughter>
            <button onClick={clickhandeler}>click button</button>
        </div>
        
    )
}

export default Parent;
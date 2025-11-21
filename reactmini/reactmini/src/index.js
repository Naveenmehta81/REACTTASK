import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './componets/car.js';
import Parent  from './componets/parent.js';
import Count from './componets/count.js';
import InputBox from './componets/count.js';



// const myelement = (
//   <div>
//     <p>i need to command in jsx.</p>
//   </div>
// );

// function Car(){
//   return(
//     <div>
//        <h1>my car </h1>
//     <p>i used a car function</p>
//     </div>
    
//   );
// };


// function Kwtohp(kw){
//   return kw*2
// };

// function Car(){
//   return(
//     <div>
//        <h1>my car </h1>
//     <p>my car has{Kwtohp(2)} are </p>
//     </div>
    
//   );
// };

// function Car(props){
//   return(
//     <div>
//       <p>my car clour{props.color}</p>
//     </div>
//   )
// }

// let x = "ford";
// let y = [1192 ,323, 333];




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  //  <Car/>
      
    // //  <Car color = "red" />

    //  <Car brand={x} year ={y}/>

    // <Car barnd="kia"  model="2025"  year={2022}  color="balck"/>

    //<Parent/>
    
    //  <Count/>

    // <InputBox/>

    // < Car/>

    <InputBox/>
    
     
);


reportWebVitals();

import './productform.css';
import { useState } from 'react';

function ProductForm(){
   const[newTitle , settitle] = useState('');
   const[newDate , setdate]   = useState('');


   function titlechangehandler(event){
    settitle(event.target.value);
    
   }

   function dateechangehandler(event){
    setdate(event.target.value);
   }
   

   function submitHandler(event){
      event.preventDefault();

       const productData ={
        title : newTitle,
        date : newDate
       };

       console.log(productData);

   };



    return(<form className='new-product-control' onSubmit={submitHandler}>
        <div >
            <div>
                <label>Title</label>
                <input type='text' onChange={titlechangehandler}></input>
            </div>
            <div>
             <label>Date</label>
            <input type='date' min='2025-01-01' max ='2025-12-12'  onChange={dateechangehandler}></input>
            </div>
            <div className='button-add'>
                <button type='submit' >Add product</button>
            </div>
           
        </div>
        </form>
    
    )
}


export default  ProductForm;
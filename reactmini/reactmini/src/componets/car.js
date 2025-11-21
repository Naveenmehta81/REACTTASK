
// function Car({barnd , model , ...rest}){
//     // const{barnd , model} = props;
//     return(
//     //    <h1>hy i make a component used in props {props.brand} and  year is {props.year[0]} , {props.year[1]}</h1>
//         <h2>i buy a {barnd} and {model} car {rest.color}</h2>
//     );
// }


function Car(){
    const cars = ['ford' , 'bmw' , 'audi'];
    return(
        <div>
              <h1>my cars</h1>
        <ul>
            {cars.map((car)=><li>fav car {car}</li>)}
        </ul>

        </div>
       
    );
}

export default Car;    

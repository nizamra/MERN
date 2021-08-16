// setTimeout( function() { 
//     console.log("start") }, 2000 );
// setTimeout( function() { 
//     console.log("next potato") }, 3000 );
      
//   console.log("end");
  

//    typeof( "hello" );
// 'string'
// > typeof( function() {} );
// 'function'

// console.log("end");


var exampleFunction = function(message,mes2){
    console.log( mes2 );
    console.log( message );
};
// exampleFunction( "ramadan Kareem","tamam tamam");
parentFunction=( callback )=>{
  callback( "information from the parent function" , "rail road");
}
parentFunction(exampleFunction);


const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );


const values = [1, 2, 3, 4, 5];
const evens = numbers.filter( val => val % 2 === 0 );

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );

const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );


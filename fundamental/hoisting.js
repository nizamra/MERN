// GIVEN
// console.log(example);
// var example = "I'm the example!";
//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";
// let 1 = equality;
// 2 async JS;
// 3 error handling;
// 4 ES6;
// 5 array metods;
// console.log(example);
// let example = "I'm the example!";

// 1
// console.log(hello);                                   
// var hello = 'world';                                 
// 2
// var needle = 'haystack';
// test();
// function test(){
//     needle = 'magnet';
//     console.log(needle);
// }
// console.log(needle);

// 3
// var brendan = 'super cool';
// print();
// function print(){
//     brendan = 'only okay';
// //     console.log(brendan);
// }
// console.log(brendan);

// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     console.log(food);
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
//     console.log(food);
// }
// console.log(food);

// 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

//  makeDojo("asd", 12)

// 8
console.log(makeDojo("Batata", 0));
console.log(makeDojo("WaterMelon", 65));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = false;
    }
    return dojo;
}
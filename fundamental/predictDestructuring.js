// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// console.log(randomCar) //Tesla
// console.log(otherRandomCar) //Mercedes


// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// // console.log(name);
// console.log(otherName);


// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);


// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// console.log(first == second);
// console.log(first == third);


const lastTest={
    key: 'value',
    secondKey : 'ramy'
}
const {key} = lastTest;
const{secondKey} = lastTest;
// const [,willThisWork]=lastTest;
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
// console.log(willThisWork);
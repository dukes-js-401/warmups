'use strict';

let nums = [1,2,3,4,5,6,7,8,9,10];

function forLoop(arr){
  for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}

function whileLoop(arr){
  let i=0;
  while(i<arr.length){
    console.log(arr[i]);
    i++;
  }
}

function map(arr){
  let output = [];
  for(let i=0; i<arr.length; i++){
    output[i] = arr[i];
  }
  console.log(output);
}

function filter(arr, cb){
  let output = [];
  arr.array.forEach(element => {
    if(cb(element)){
      output.push(element);
    }
  });
  console.log(output);
}

function reduce(){

}


const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

let state = {people: people, stuff: stuff};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, car:[...stuff.cars, 'Honda']};
let newState = {...state, people: ['Odie', ...state.people, 'Garfield'], stuff: {...state.stuff, cars: [state.cars, 'Handa']}};

console.log('people', people, 'newPeople', newPeople);
console.log('stuff', stuff, 'newStuff', newStuff);
console.log('state', state, 'newState', newState);
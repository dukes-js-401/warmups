'use strict';

//3/29

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
  arr.forEach(element => {
    if( cb(element) ){
      output.push(element);
    }
  });
}

function reduce(arr, cb, init){
  let acc = init;
  for (let i=0; i<arr.length; i++) {
    arr[i];
    acc = cb(acc, arr[i], i);
  }
  return acc;
}


//objects
const people = ['Koodla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'yuge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

let state = {
  people: people,
  stuff: stuff
};

let newPeople = ['Odie', ...people, 'Garfield'];

let newStuff = {...stuff, cars:[...stuff.cars, 'Nissan']};
let newState = {...state, people:['Odie', ...state.people, 'Garfield'], stuff:{...state.stuff, cars:[...state.cars, 'Nissan']}};

console.log('people', people, 'newPeople', newPeople);
console.log('stuff', stuff, 'newStuff', newStuff);
console.log('state', state, 'newState', newState);
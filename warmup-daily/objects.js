'use strict';

//3/25
const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

let state = {people: people, stuff: stuff};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars:[...stuff.cars, 'Honda'] };
let newState = {...state, people: ['Odie', ...state.people, 'Garfield'], stuff: {...state.stuff, cars: [...state.stuff.cars, 'Honda']}};

console.log('people', people, 'newPeople', newPeople);
console.log('stuff', stuff, 'newStuff', newStuff);
console.log('state', state, 'newState', newState);

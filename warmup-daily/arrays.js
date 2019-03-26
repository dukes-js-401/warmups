'use strict';

//3/25

let nums = [1,2,3,4,5,6,7,8,9,10];

function forLoop(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

function whileLoop(arr){
  let i=0;
  while(i < arr.length){
    console.log(arr[i]);
    i++;
  }
}

function map(arr){
  let output = [];
  for(let i = 0; i , arr.length; i++){
    output[i] = arr[i];
  }
  console.log(output);
}

function filter(arr, cb){
  let output = [];
  arr.forEach(ele => {
    if( cb(ele) )
    output.push( ele );
  });
  console.log(output);
}

function reduce(){
  
}
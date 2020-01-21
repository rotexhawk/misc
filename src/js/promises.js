var ElapsedTime = require("elapsed-time");
var et = ElapsedTime.new().start();

const getValue = (val, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), delay);
  });
};

function output() {
  const promise = getValue("promise 1", 6000);
  const promiseTwo = getValue("promise 2", 8000);
  
  promise
    .then(e => {
      console.log(" resolved", e, et.getValue());
     
      promiseTwo.then(c => console.log("both", e, c, et.getValue()));
    })
    .then(() => console.log("wtf", et.getValue()));
}

output();

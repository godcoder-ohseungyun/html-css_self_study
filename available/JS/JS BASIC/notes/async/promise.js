'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically. <- 네트워크 통신 기능 구현시 불필요한 통신 일어남 주의

const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files) //heavy work는 비동기로 처리하는게 좋다
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie'); //성공시 
    // reject(new Error('no network')); //실패시
  }, 2000);
});


// 2. Consumers: then, catch, finally
// promise를 catch
promise //
  .then(value => {  //if resolve
    console.log(value);
  })
  .catch(error => { //if reject
    console.log(error);
  })
  .finally(() => {  //dont care
    console.log('finally');
  });



// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => { //Promise전달도 가능
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));


  

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);
  

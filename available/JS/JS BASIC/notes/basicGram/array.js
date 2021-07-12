'use strict';

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));
//note!: ctrl +click -> forEach API -> 분석
//forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void; //"thisArg?" 처럼 "?"표기가 있는건 자율적으로 채워주면 됨
//fruits.forEach((fruit ,index,array) => console.log(fruit ,index , array));
//요소 인덱스 배열 순차적 출력 


// 4. Addtion, deletion, copy

//뒤에 삽입 삭제
// push: add an item to the end
fruits.push('🍓', '🍑'); //append
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

//앞에 삽입 삭제
// unshift: add an item to the benigging
fruits.unshift('🍓', '🍋'); 
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift(); 
fruits.shift();
console.log(fruits);

//위치를 지정해서 삽입 삭제
// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1); // (start index num , how many item delete? = default all del)
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); // 1 index 부터 1개 삭제 후 뒤 요소 포함
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2); //배열 병합
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🥥'));

'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}


//비추천 기능 알아만 두자=======================================================
const ellie = { name: 'ellie', age: 4 }; //class 없이도 사용 가능
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true; //이후에 요소 하나 더 추가
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob; //이후에 요소 하나 삭제
console.log(ellie.hasJob);
//==============================================================================


// 2. Computed properties
// key should be always string
//맴버변수 출력 방법 2
console.log(ellie.name); // 고정값으로 출력되는 경우
console.log(ellie['name']); //실시간 변화를 받아와서 출력되는 경우 

ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); //true
console.log('age' in ellie); //false
console.log('random' in ellie);
console.log(ellie.random);
// 6. for..in vs for..of
// for (key in obj)
console.clear();


for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];

for (let value of array) { //pyton 처럼 반복문 선언 가능
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

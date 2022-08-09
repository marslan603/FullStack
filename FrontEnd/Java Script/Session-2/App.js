console.log('App js Running')
/*
var a=5;
console.log(a);

{   
    var a = 3;
    console.log(a);
}

console.log(a);


let b = 5;
console.log(b);

{
    let b=3;
    console.log(b);
}
console.log(b);

console.log(typeof 0);
console.log(typeof 3.14);
console.log(typeof "Hello");
console.log(typeof 'Hello');
console.log(typeof (8>7)); 


let c = +prompt('Bir Değer Giriniz');
console.log(c); 


let b = 22
let b = +prompt('Bir rakam giriniz')

console.log(b, typeof b)


var age;

console.log(age)

console.log(myAge)

var myAge = 40;

console.log('Hello') 

let age;

console.log(age)

console.log(myAge)

let myAge = 40;

console.log('Hello')

let a = null;
let b = undefined;
console.log(a, typeof a);
console.log(b, typeof b); 

let x= 0.121212121212121
let y= 0.1212121212121210005
console.log(x, y)
console.log(+x.toFixed(2));

`` /  ''  / " "  // STRİNG Models

let userName = 'Silyon';
console.log('Merhaba' , userName);
console.log(`Merhaba ${userName}`);
console.log(`2 + 3 = ${2 + '3'}`);
console.log('3' - 2);


let x = 6 < 5;
console.log(`x = ${x}`);

let y = `11` == '11' == 11;

console.log(`y = ${y}`);

console.log(Boolean(x));
*/

const myCar = {
    make : 'ford',
    model : 'Mustang',
    year : 1965,
    color : 'Black'
  }
  console.log(myCar);

  myCar.color = 'green';

  console.log(myCar);

  // myCar = 'ford'

  myCar.sunRoof = false;

  console.log(myCar);

  myCar.age = function(current){
    console.log(current - this.year)
  }

myCar.age = 2022

console.log(myCar);
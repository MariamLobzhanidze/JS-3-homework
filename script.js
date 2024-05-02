// homework 1

for(let i = 1; i < 100; i++){
    console.log(i);
};


// homework 2

let n = 1;
while (n < 50) {
    console.log(n);
    n +=1;
};


// homework 3

const namesArray = ['mariam', 'davit', 'anna', 'leri', 'dachi'];

namesArray.shift();
console.log(namesArray);

namesArray.unshift('elene');
console.log(namesArray);

namesArray.pop();
console.log(namesArray);

namesArray.push('tamo', 'liliana', 'mariami');
console.log(namesArray);

// homework 4

const emptyArray =  [];

 for (let x = 0; x < 10000; x++) {
       emptyArray.push(x*x);
 };
 
 console.log(emptyArray);


const emptyArray2 = []; 
let k=0;
 
 while (k<10000) {
  let arrayNumber=k*k;
  emptyArray2.push(arrayNumber)
  k +=1;
 };
 
 console.log(emptyArray2);

 
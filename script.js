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


  //  homework 5

  const sumArray = [15, 70, 2024, 146, 687];
 
  let sum = 0;
 
  for (let s = 0; s < sumArray.length; s++) {
     sum = sum + sumArray[s];
  }
  
  console.log(sum);
 
 
 //  homework 6
 
 for (let number = 8; number < 13; number++) {
     if (number ) {
         console.log(false)
     } else {
         console.log(true)
     }
 };

 // homework 7

let carArray = ["TOYOTA", "MerCedES", "PorsCHE", "Alfa-romeo", "Ferrari"];

for (let y = 0; y < carArray.length; y++) {
    const brands = carArray[y];
    if (brands.length < 6) {
        console.log(brands.toUpperCase())
    } else {
        console.log(`${brands} has more than 6 letter.`)
    } ;
};

// homework 8

const multiNumberArray = [4, 5, 6, 7, 8, 10, 11, 14, 19, 21, 24, 38, 42, 56, 68, 84];

function sortEvenNumbers(num) {
    for (let k = 2; num > k; k++) {
        if (num % k === 0) {
            return true;

        } else {
            return 0;

        }
    };
};

console.log(multiNumberArray.filter(sortEvenNumbers));



function sortOddNumbers(num) {
    for (let k = 2; num > k; k++) {
        if (num % k !== 0) {
            return true;

        } else {
            return 0;

        }
    };   
};

console.log(multiNumberArray.filter(sortOddNumbers));
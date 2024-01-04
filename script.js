// 21nova//
const nestedStructure = [
    ["Pen"], 
    ["Paper"], 
    [
        ["Apple"], 
        ["Blues"]
    ]
];

const value = nestedStructure[2][1][0];
console.log(value);

//21novb
let firstArray = [1, 2, 3, 4];
let secondArray = firstArray;
secondArray.push(5);

console.log(firstArray);
console.log(secondArray); 

//22nov

const teststr = "Rovor herO";

function countO(sen) {
  const sentence = sen.toLowerCase();
  const arrSentence = sentence.split("o");
  return arrSentence.length -1;
  
}


console.log(countO(teststr));


//const teststr = "Rovor herO";

//function countO(sen) {
  //const sentencelower = sen.toLowerCase();
 // const counter = 0;
  //for(let i = 0; i < sen.length; i++){
     // counter++;
//}
//return counter;
//}
//const total = (countO(teststr));
//console.log(total));


  //nov23
  //1 to 50

function RandomNumber() {
    let num = Math.floor(Math.random() * 50) + 1;
    return num;
  }
  
  console.log(RandomNumber());
  
  //  1 to 100
  
  function RandomEvenNumber() {
    let num = Math.floor(Math.random() * 100);
    if(num%2 === 0){
      return num;
    }else{
      return num + 1;
    }
  }
  console.log(RandomEvenNumber())


  // 23novc
  function LargestNumber(num) {
    const maxValue = Math.max(...num);
    console.log(maxValue);
  
    return maxValue;
  }
  const numbers = [43, 45, 97, 75, 89 ,90];
  const largest = LargestNumber(numbers);
  




//23novd

function x(num){
  let BTC = num.toLocaleString("en-IN", {style: "currency", currency: "BTC"})
  return BTC;
}
let num = 4935794573
console.log(x(num))



//24novb


const Array = [1, 2, 3, 4, 5, 6, 7];
const reverseArray = (arr) => arr.slice().reverse();
const reversedArray = reverseArray(Array);

console.log("Reversed Array:", reversedArray);


//24novc

function countDown(num) {
  if (num <= 0) {
    console.log("complete");
    return;
  }

  console.log(num);
  countDown(num - 1);
}

countDown(7);

//novD

function wish(name, message) {
  if (name === undefined) {
    name = "shiv";
  }

  if (message === undefined) {
    message = "RAM RAM,";
  }

  return message + " " + name;
}

console.log(wish()); 



function wish(name = "shiv", message = "RAM RAM,") {
  return message + " " + name;
} 

console.log(wish("shiv", "namstey,")); 

//27nova

let i = 5

do{
  console.log(i) 
  i--;
}while(i >= 1)  


//27novb

function Table(number) {
  let i = 1;

  do {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
  } while (i <= 10);
}

Table(8);


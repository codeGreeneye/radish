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
  const numbers = [25, 10, 42, 7, 31];
  const largest = LargestNumber(numbers);
  




//23novd

function x(num){
  let BTC = num.toLocaleString("en-IN", {style: "currency", currency: "BTC"})
  return BTC;
}
let num = 4935794573
console.log(x(num))

//24nova


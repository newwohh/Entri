// // alert("hello world");
// // prompt("enter age");
// // console.log("success");

// let data;

// console.log(data);
// console.log(typeof data);

// let arr = [1, 2, 3];
// console.log(100 % 30);

// for (let i = 0; i < 5; i++) {
//   let num = 1;
//   num += i;
//   console.log(num);
// }

// for (let i = 10; i >= 5; i--) {
//   console.log(i);
// }

// for (const n of arr) {
//   console.log(n);
// }

// arr.forEach(function (el) {
//   console.log(el);
// });

// arr.forEach((el) => {
//   console.log("s" + el);
// });

// var expenses = [25000, 30000, 50000, 30000];

// var sum = 0;
// expenses.forEach((n) => {
//   sum = sum + n;
//   console.log(sum);
// });

// var highest = 0;
// expenses.forEach((a, b) => {
//   if (expenses[b] > expenses[b - 1]) highest = expenses[b];
// });
// console.log(highest);

// var smallest = 0;
// expenses.forEach((a, b) => {
//   if (expenses[b] < expenses[b - 1]) smallest = expenses[b];
// });
// console.log(smallest);

// expenses.push(35000);
// console.log(expenses);

// let arrMap = expenses.map((el) => el + 1);

// console.log(arrMap);

// mapArr = [2, 3, 4, 5];
// let arrSqr = mapArr.map((el) => el * el);
// console.log(arrSqr);

// let normalMap = mapArr.map(function (el) {
//   return el * el;
// });

// console.log(normalMap);

// let popArr = [1, 2, 3, 4];
// popArr.pop(4);
// console.log(popArr);

// let users = ["arun", "sujith", "nevin"];
// // users.pop("nevin");
// users.unshift("gokul");

// console.log(users);

// let users2 = ["arun", "sujith", "nevin"];
// users2.shift();
// console.log(users2);
// console.log(users2.includes("nevin"));

// let users3 = ["arun", "sujith", "nevin"];
// console.log(users3.includes("arun"));

// var expenses2 = [25000, 30000, 50000, 30000];
// var emptyArr = [];
// expenses2.forEach((el) =>
//   !emptyArr.includes(el) ? emptyArr.push(el) : "skip"
// );

// console.log(emptyArr);

// let fruits = ["Apple", "Mango", "Grape", "Orange"];
// let bikes = ["Honda", "TVS", "Yamaha"];
// let unsortedArr = [2, 1, 4, 3];

// let res = fruits
//   .concat(bikes)
//   .slice(1, 2)
//   .join("-")
//   .toString()
//   .split("-")
//   .splice(1, 0, "Pineapple");
// // let sortedArr = unsortedArr
// //   .sort((a, b) => a - b)
// //   .filter((a) => a % 2 == 0)
// //   .reduce((a, b) => a * b);

// // console.log(fruits, sortedArr);
// ///////////////////////////////////////////////////////
// /// TASK
// /*var arr=[2,3,4,5,6,7,8];
// Make all elements squares
// Print only even numbers from the array
// Print only odd numbers from the array
// Find the largest element in the array
// sort the array in descending order
// */

// /*var names=["arjun","akil","arvind",'ram','ravi','Akash'];
// print names with first letter a
// */

// var arrNum = [2, 3, 4, 5, 6, 7, 8];
// var names = ["arjun", "akil", "arvind", "ram", "ravi", "Akash"];

// var squares = [];
// var evenArr = [];
// var oddArr = [];
// var largestNum;
// var nameStartsWithA;

// let arrRes = arrNum
//   .sort((a, b) => b - a)
//   .filter((a) => (a % 2 == 0 ? evenArr.push(a) : oddArr.push(a)))
//   .forEach((a, b) => (squares[b] = a * a));
// largestNum = arrNum.reduce((a, b) => (a > b ? a : b));
// nameStartsWithA = names.filter((a) =>
//   a.startsWith("a") || a.startsWith("A") ? a : ""
// );

// console.log(
//   `Task 1
//    1.1 Squares of Elements ${squares}
//    1.2 Even Number ${evenArr}
//    1.3 Odd Number ${oddArr}
//    1.4 Largest Number ${largestNum}
//    1.5 Sorted By Descending Order ${arrNum}
//   Task 2
//    Names with Letter 'a' ${nameStartsWithA}`
// );
// /////////////////////////////////////////////////////

// var employee = [
//   [01, "ram", "10 years", 35],
//   [02, "anil", "2 years", 25],
//   [03, "nikhil", "4 years", 28],
//   [04, "nikhil", "4 years", 25],
// ];

// let checkName = employee.some((el) => el[1] == "anil");
// let checkID = employee.find((el) => el[0] == 03);
// let checkIndex = employee[1].indexOf("anil");
// let findIndexOf = employee.findIndex((el) => el[1] == "nikhil");
// let arrFlat = employee.flat();
// let ternaryArr = employee.length == 3 ? console.log("Yes") : console.log("No");

// console.log(`some ${checkName},
// find ${checkID},
// indexOf ${checkIndex},
// findIndex ${findIndexOf},
// flat ${arrFlat}`);

// //////////////////////////////////////////////////////////////

// //Task

// /*
// Print all mobile names

// Print all mobile prices

// Print only mobiles with samsung brand

// print all mobile phones below 25000

// Print mobile details of avaialable in price range of 25k to 30k

// List all 5g mobile names

// List all 5g mobiles under 35000

// List all samsung mobile whose band=4g and dispaly type is AMOLED
// */

// var mobiles = [
//   [1000, "samsung", "samsung f41", 15000, "snapdragon", "AMOLED", "4g"],
//   [1001, "samsung", "samsung A51", 32000, "snapdragon", "AMOLED", "5g"],
//   [1002, "redmi", "not 10 pro", 19000, "snapdragon", "LED", "4g"],
//   [1003, "redmi", "mi 11 lite", 30000, "mediatek", "LED", "4g"],
//   [1004, "apple", "12 pro", 72000, "snapdragon", "AMOLED", "4g"],
//   [1005, "apple", "12 pro max", 100000, "snapdragon", "AMOLED", "5g"],
//   [1006, "one plus", "nord 2", 29000, "snapdragon", "AMOLED", "4g"],
//   [1007, "one plus", "nord 2", 15000, "mediatek", "LED", "4g"],
// ];

// const mobilesAssignment = (arr) => {
//   var mobileNames = [],
//     mobilePrice = [],
//     samsungMobile = [],
//     below25k = [],
//     mobilesBetween25and30 = [],
//     fivegMobile = [],
//     fivegMobilesBelow35k = [],
//     fourgBandSamsungMobile = [];

//   arr.forEach((el) => {
//     mobileNames.push(el[2]);
//     mobilePrice.push(el[3]);
//     if (el.includes("samsung")) samsungMobile.push(el[2]);
//     if (el[3] < 25000) below25k.push(el[2]);
//     if (el[3] >= 25000 && el[3] <= 30000)
//       mobilesBetween25and30.push(el.slice(1, 6));
//     if (el[el.length - 1] == "5g") fivegMobile.push(el[2]);
//     if (el[el.length - 1] == "5g" && el[3] < 35000)
//       fivegMobilesBelow35k.push(el[2]);
//     if (
//       el.includes("samsung") &&
//       el[el.length - 1] == "4g" &&
//       el[el.length - 2] == "AMOLED"
//     )
//       fourgBandSamsungMobile.push(el[2]);
//   });

//   return `
// All mobiles ${mobileNames} \nAll mobiles Price ${mobilePrice} \nAll Samsumg Mobiles ${samsungMobile} \nAll Mobiles Below 25000 ${below25k} \nDetails of Mobiles between 25000 and 30000 ${mobilesBetween25and30} \nAll 5g Mobiles ${fivegMobile} \nAll Samsung Mobile Whose Band=4g and Display type is AMOLED ${fourgBandSamsungMobile}
// `;
// };

// console.log(mobilesAssignment(mobiles));

// // let names="gokul";
// // console.log(names[3]);
// // console.log(names.length);
// // // string slice
// // let hey="hey how are you"
// // console.log(hey.slice(3,8));
// // console.log(hey.substring(0,9));

// // let names="its an amazing thing"
// // let res = names.replace("amazing","not")
// // console.log(res);

// // let res=names.replaceAll(/amazing/gi,"not")
// // console.log(res);

// let setance = "hey whts your name hehe";
// // let res=setance.toUpperCase()
// // console.log(res);
// let sen2 = "hey hhjh hello wrong";
// // let res=setance.concat(sen2)
// // console.log(res);

// // let love='    heyy maahnnn'
// // let res1=love.trim()
// // console.log(res1);
// // let text='e'
// // let rel=text.padStart(3,'w')
// // console.log(rel);
// // let res=sen2.charAt(5)
// // console.log(res);

// let list = "heyt,hello,hmm,kk";
// let r = list.split(",");
// console.log(res);
// /*
// Dynamically accept your name as input and convert it to upper case
// Dynamically accept your name as input and convert it to lower case
// Print how many times each repeating each character in this string
// {A:3,B:2,C:1,D:1}
// */
// const prompt = require("prompt-sync")();
// // npm i prompt-sync
// var text = "ABCDAAB",
//   repeatedChar = {};
// const input = prompt("What's your name? ");

// const jsAssignment = (inputName, str) => {
//   let repeatingChar = str
//     .split("")
//     .forEach((item) => (repeatedChar[item] = (repeatedChar[item] || 0) + 1));
//   return console.log(
//     inputName.toUpperCase(),
//     inputName.toLowerCase(),
//     repeatedChar
//   );
// };

// jsAssignment(input, text);

//trim,padStarts,padEnds,split,regex,toUpperCase,toLowerCase,subString,concat,replace,replaceAll,charAt

// var string = "entri elevate full stack development elevate";
// var arr = [1, 2, 3, 4, 5];
// var arr2 = [6, 7, 8, 9, 10];

// var ioString = string.indexOf("full", 5);
// var strRes = string.lastIndexOf("development");
// var resRegEx = string.search(/stack/);
// var resMatch = string.match(/full/);
// var resMatchAll = string.matchAll(/elevate/g);
// var resIncludes = string.includes("full", 7);
// var resStarts = string.startsWith("e");
// var resEndss = string.endsWith("e");
// var maxNum = Math.max(5, 4, 3, 2, 1);
// var maxNumSpreaded = Math.max(...arr);
// var mergeArrUsingSpread = [0, ...arr, 0, ...arr2];
// var shallowCopy = arr;
// shallowCopy[0] = 1000;
// var deepCloning = arr;
// deepCloning[0] = 1000;

// for (let i of resMatchAll) console.log(i);

// indexOf,lastIndexOf,search,match,matchAll,includes,startsWith,endsWith,Math.max,array spread,shallow copy,deep cloning

// console.log(
//   ioString,
//   strRes,
//   resRegEx,
//   resMatch,
//   resIncludes,
//   resStarts,
//   resEndss,
//   maxNum,
//   maxNumSpreaded,
//   mergeArrUsingSpread,
//   arr,
//   shallowCopy,
//   arr2,
//   deepCloning
// );

// let stri = "India is my country, I love India",
//   strMatches,
//   arr1 = stri.split(" ").slice(0, 3),
//   arr2 = stri.split(" ").slice(3, 7);

// var obj = {
//   firstIndex: stri.indexOf("India"),
//   lastIndex: stri.lastIndexOf("India"),
//   firstIndex2: stri.indexOf("india"),
//   checkStrIncl: stri.includes("India"),
//   checkStrStarts: stri.startsWith("India"),
//   checkStrEnds: stri.endsWith("India"),
//   mergeArr: [...arr1, ...arr2],
//   deepClone: [...arr1],
// };

// const jsAssignment = (obj, ...args) => {
//   const sum = () => args.reduce((x, y) => x + y, 0);
//   strMatches = stri.matchAll("india");
//   for (let i in obj) console.log(obj[i]);
//   for (let k of strMatches) console.log(k);
//   console.log(sum());
// };

// jsAssignment(obj, 12, 5, 5);

// function sum(a, b) {
//   console.log(a + b);
// }

// function display(a, b, fn) {
//   fn(a, b);
// }

// const greetingsFn = (name, age) =>
//   console.log("Hey! " + name + " you are " + age + " old");

// display(5, 10, sum);
// greetingsFn("Nevin", 23);

// normal function,arrow function,callback function,"this" keyword in normal function

// var num = 10n;
// var numToString = num.toString();
// var numFloat = Number((9.555).toFixed(1));
// var numRound = Math.round(numFloat);
// var numCeil = Math.ceil(numFloat);
// var numFloor = Math.floor(numFloat);
// var numTrunc = Math.trunc(numFloat);
// var numSign = Math.sign(numFloat);
// var numPower = Math.pow(2, 2);
// var numSqrt = Math.sqrt(numCeil);
// var numMin = Math.min(50, 100);
// var numMax = Math.max(50, 100);
// var numRandom = Math.random();
// // parseInt,parseFloat,isNaN
// console.log(
//   typeof num,
//   typeof numToString,
//   numFloat,
//   numRound,
//   numCeil,
//   numFloor,
//   numTrunc,
//   numSign,
//   numPower,
//   numSqrt,
//   numMin,
//   numMax,
//   numRandom
// );
// let Date = new Date();
// console.log(Date);

//pyramid of doom,callback hell,eventloop

/*https://jsonplaceholder.typicode.com/users >>> Fetch Users list and display in html page

https://restcountries.com/v3.1/all  >>>> Country API >>> List all countries name is dropdown and show the details of a selected country

https://restcountries.com/v3.1/name/{name}?fullText=true >>> Display the details of the country when enter the name of the country on submit*/
/*
function tryCatchfn(x) {
  try {
    x % 2 === 0 ? console.log("even") : BAD_CODE();
  } catch (error) {
    console.log("Error From Catch " + error.name);
  } finally {
    console.log("from finally");
  }
}

tryCatchfn(3);

let x = {
  string: "string",
};

let y = {
  number: 2,
};

y.__proto__ = x;

console.log(y.string);

class name {
  constructor(name) {
    this.name = name;
  }

  myName(name) {
    console.log(`My Name is ${this.name}`);
  }
}

let user = new name("name");

user.myName();
*/

// export const name = "Arjun";
// export const welcome = (user) => alert(name);

// import { name } from "./exportJs.mjs";

// var numbersArr = [11, 13, 17];
// var [, championship] = numbersArr;

// var obj = {
//   hisNameIs: name,
//   championship: "World Heavyweight Champion",
//   timesGotChampionship: championship,
// };
// var { hisNameIs } = obj;

// var resJSON = JSON.stringify(obj);
// var resParse = JSON.parse(resJSON);

// localStorage.setItem("key", "value");
// var getLocal = localStorage.getItem("key");

// console.log(resJSON, obj, resParse, hisNameIs, getLocal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

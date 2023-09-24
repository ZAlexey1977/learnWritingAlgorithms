let log = console.log;

////////////////////////////////// unit 1 //////////////////////////////

// function convertCtoF(celsius) {
//   let fahrenheit = celsius * 9 / 5 + 32;
//   return fahrenheit;
// }

// log(convertCtoF(30));

////////////////////////////////// unit 2 //////////////////////////////

// function reverseString(str) {

//   return [...str].reverse().join('');
// }

// log(reverseString("hello"));

////////////////////////////////// unit 3 //////////////////////////////

// function factorialize(num) {
//   if (num <= 0) {
//     return 1;
//   }
//   return num * factorialize(num - 1);
// }

// log(factorialize(10));

////////////////////////////////// unit 4 //////////////////////////////

// function findLongestWordLength(str) {
//   let ar = str.split(' ');
//   let num = ar[0].length;
//   let result = ar.map((el) => {
//     if (el.length > num) {
//       num = el.length;
//       log(el)
//     }
//   })
//   return num;
// }

// log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

////////////////////////////////// unit 5 //////////////////////////////

// function largestOfFour(arr) {
//   let result = arr.map((el) => {
//     let temp = [];
//     temp = el.sort(function (a, b) {
//       return a - b;
//     });
//     return temp[el.length - 1];
//   })
//   return result;
// }

// log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

////////////////////////////////// unit 6 //////////////////////////////

// function confirmEnding(str, target) {
//   let ar = str.split('');
//   let leng = target.length;
//   if (str.slice((str.length) - leng) == target) {
//     return true
//   }
//   return false;
// }

// log(confirmEnding("Bastian", "n"));

////////////////////////////////// unit 7 //////////////////////////////

// function repeatStringNumTimes(str, num) {
//   let out = '';
//   for (let i = 0; i < num; i++) {
//     out += str;
//   }
//   return out;
// }

// log(repeatStringNumTimes("abc", 3));

////////////////////////////////// unit 8 //////////////////////////////

// function truncateString(str, num) {
//   let ar = str.split('');
//   let out = '';
//   log(ar);
//   for (let i = 0; i < ar.length; i++) {
//     out += ar[i];
//     if (ar[i] == ' ') {
//       continue;
//     }

//     if (num == str.length) {
//       out = str;
//       break;
//     }

//     if (i >= num - 1) {
//       out += '...';
//       break;
//     }

//   }
//   return out;
// }
// log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

////////////////////////////////// unit 9 //////////////////////////////

// function booWho(bool) {
//   if(bool === true || bool === false){
// return true;
//   }
//   return false;
// }

// booWho(null);

////////////////////////////////// unit 10 //////////////////////////////

// function titleCase(str) {
//   let ar = str.split(' ');
//   let out;
//   let result;
//   let temp = ar.map((el) => {
//     out = el.split().toString();

//     for (let i = 0; i < out.length; i++) {
//       result += out[i];
//       if (i == 0) {
//         out[i].toUpperCase();
//       }
//     }

//   })
//   return result;

// }

// log(titleCase("I'm a little tea pot"));

////////////////////////////////// unit 11 //////////////////////////////

////////////////////////////////// unit 12 //////////////////////////////

////////////////////////////////// unit 13 //////////////////////////////

////////////////////////////////// unit 14 //////////////////////////////

////////////////////////////////// unit 15 //////////////////////////////

////////////////////////////////// unit 16 //////////////////////////////

////////////////////////////////// unit 1 //////////////////////////////

////////////////////////////////// unit 1 //////////////////////////////

////////////////////////////////// unit 1 //////////////////////////////

////////////////////////////////// unit 1 //////////////////////////////


// function titleCase(str) {
//   let ar = str.split(' ');
//   let out;
//   let result;
//   let temp = ar.map((el) => {
//     out = el.split().toString();

//     for (let i = 0; i < out.length; i++) {
//       result += out[i];
//       if (i == 0) {
//         out[i].toUpperCase();
//       }
//     }

//   })
//   return result;

// }

// log(titleCase("I'm a little tea pot"));


// function titleCase(str) {
//   let ar = str.split(' ');
//   let out;
//   let result;
//   let temp = ar.map((el) => {
//     out = el.split().toString();

//     for (let i = 0; i < out.length; i++) {
//       result += out[i];
//       if (i == 0) {
//         out[i].toUpperCase();
//       }
//     }

//   })
//   return result;

// }

// log(titleCase("I'm a little tea pot"));


// function titleCase(str) {
//   let ar = str.split(' ');
//   let out;
//   let result;
//   let temp = ar.map((el) => {
//     out = el.split().toString();

//     for (let i = 0; i < out.length; i++) {
//       result += out[i];
//       if (i == 0) {
//         out[i].toUpperCase();
//       }
//     }

//   })
//   return result;

// }

// log(titleCase("I'm a little tea pot"));

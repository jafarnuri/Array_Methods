//filter method

// function Filter(myarr) {
//   let newarr = [];
//   for (let i = 0; i < myarr.length; i++) {
//     if (myarr[i] > 10) {
//       newarr.push(myarr[i]);
//     }
//   }
//   return newarr;
// }

// let filter = [15, -5, 7, -99, -2, 15, 55];
// console.log(Filter(filter));

//every method

// function Every(myarr) {
//   for (let i = 0; i < myarr.length; i++) {
//     if (myarr[i] % 2 !== 0) {
//       return false;
//     }
//   }
//   return true;
// }

// let every = [2, 4, 8, 8];
// console.log(Every(every));

//some methode

// function Some(myarr) {
//   for (let i = 0; i < myarr.length; i++) {
//     if (myarr[i] % 2 === 0) {
//       return true;
//     }
//   }
//   return false;
// }

// let some = [1, 7, 3, 5];
// console.log(Some(some));

//reduce method

// function Reduce(myarr) {
//   let cem = 0;
//   for (let i = 0; i < myarr.length; i++) {
//     cem += myarr[i];
//   }
//   return cem;
// }
// let reduce = [3, 7, 4, 9, 7];
// console.log(Reduce(reduce));

//find method

// function Find(myarr) {
//   for (let i = 0; i < myarr.length; i++) {
//     if (myarr[i] % 2 === 0) {
//       console.log(myarr[i]);
//       break;
//     }
//   }
// }

// let find = [1, 3, 8, 5];
// console.log(Find(find));

//includes  method

// function Includes(myarr, num) {
//   for (let i = 0; i < myarr.length; i++) {
//     if (myarr[i] == num) {
//       return true;
//     }
//   }
//   return false;
// }
// let includ = [3, 7, 4, 9, 1];
// console.log(Includes(includ, 1));

//Sort methods

// function Sort(myarr) {
//   for (let i = 0; i < myarr.length; i++) {
//     for (let j = 0; j < myarr.length - i; j++) {
//       if (myarr[j] > myarr[j + 1]) {
//         [myarr[j], myarr[j + 1]] = [myarr[j + 1], myarr[j]];
//       }
//     }
//   }
//   return myarr;
// }
// let newarr = [6, 1, 9, 5, 22, 1, 4, 8, 2];
// console.log(Sort(newarr));

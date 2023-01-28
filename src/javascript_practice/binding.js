// function myfunc() {
//   //default binding
//   console.log(this); //window obj
// }

// myfunc();

// var temp = {
//   name: "ajay",
//   func: function () {
//     //implicit binding
//     console.log(this.name); //ajay
//   },
// };

// // var temp2 = {
// //   name: "Manisha",
// //   func2: function () {
// //     console.log(this.name);
// //   },
// // };

// temp.func();

// var name = "Abhinav";
// //explicit binding
// temp.func = temp.func.bind(temp); //
// var display = temp.func;
// console.log(display);

// display(); //

// let details = {
//   name: "Abhinav",
//   college: "Lpu",
//   batch: 2024,
// };

// //Shallow COPY

// let copiedDetails = details;

// console.log("before: ", { details }, { copiedDetails });

// details.name = "Manjot";

// console.log("after: ", { details }, { copiedDetails });

// //DEEP COPY

// // let copiedDetails = {
// //   name: details.name,
// //   college: details.college,
// //   batch: details.batch,
// // };

// // copiedDetails.name = "Manjot";

// // console.log({ details }, { copiedDetails });

// // let copiedDetails = JSON.parse(JSON.stringify(details));

// // copiedDetails.name = "Manjot";

// // console.log({ details }, { copiedDetails });

// // Shallow Comparision:
// /*
//   1) Primitive Type

//   2) Complex Type
// */

// // 1)
// // var person = "Shashi";
// // console.log(persosn === "Shashi"); //true

// // complex

// var a = [1, 2, 3];
// var b = [1, 2, 3];
// console.log(a === b); //false

// Types of HTTP request:
/*
  1) GET: Read
  2) POST: Create
  3) PUT/PATCH: Update
  4) DELETE: Delete

// MONGODB
//   {
//     a: 10, 
//     b: 20
//   }


*/

// Callback

function calcAdd(a, b, funcCall) {
  let sum;
  setTimeout(() => {
    sum = a + b;
    funcCall(sum);
  });
  console.log({ sum });
  console.log({ sum });
  console.log({ sum });
  console.log({ sum });
  console.log({ sum });
  console.log({ sum });
  console.log({ sum });
  console.log({ sum });
  console.log({ sum });
  console.log({ sum });
  console.log({ sum });
  console.log({ sum });
  console.log({ sum });
}

function displayResult(res) {
  console.log("result: ", res);
}

calcAdd(3, 5, displayResult);

// function calcAdd(a, b) {
//   let sum = a + b;
//   return sum
//   // displayResult(sum);
// }

// function displayResult(res) {
//   console.log("result: ", res);
// }

// let sum = calcAdd(3, 5);
// displayResult(sum)

// function fetchData(){
//   fetch("http://example.com/api").then((data) => {
//     console.log(data)
//   }).catch()
// }

//Synchronous Call

async function fetchData() {
  //synchronous
  fetch("https://dummyjson.com/todos", { method: "GET" })
    .then((res) => {
      console.log("res: ", res);
      return res.json();
    })
    .then((data) => console.log("sync: ", data));

  //Promise:
  // let myPromise = new Promise((resolve, reject) => {
  //   let res = fetch("https://dummyjson.com/todos");
  //   resolve(res);
  // });

  // console.log({ myPromise });

  // myPromise.then((res) => res.json()).then((data) => console.log(data));

  //asynchronous
  let res = await fetch("https://dummyjson.com/todos");
  console.log("Hello");
  let data = await res.json();
  console.log("async", data);
}

fetchData();

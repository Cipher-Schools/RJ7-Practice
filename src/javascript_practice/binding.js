function myfunc() {
  //default binding
  console.log(this); //window obj
}

myfunc();

var temp = {
  name: "ajay",
  func: function () {
    //implicit binding
    console.log(this.name); //ajay
  },
};

// var temp2 = {
//   name: "Manisha",
//   func2: function () {
//     console.log(this.name);
//   },
// };

temp.func();

var name = "Abhinav";
//explicit binding
temp.func = temp.func.bind(temp); //
var display = temp.func;
console.log(display);

display(); //

let details = {
  name: "Abhinav",
  college: "Lpu",
  batch: 2024,
};

//Shallow COPY

let copiedDetails = details;

console.log("before: ", { details }, { copiedDetails });

details.name = "Manjot";

console.log("after: ", { details }, { copiedDetails });

//DEEP COPY

// let copiedDetails = {
//   name: details.name,
//   college: details.college,
//   batch: details.batch,
// };

// copiedDetails.name = "Manjot";

// console.log({ details }, { copiedDetails });

// let copiedDetails = JSON.parse(JSON.stringify(details));

// copiedDetails.name = "Manjot";

// console.log({ details }, { copiedDetails });

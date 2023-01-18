myfunc();

function myfunc() {
  console.log("hello");
  return;
}

// myfunc2();

// const myfunc2 = () => {
//   console.log("hello from myfunc2");
//   return;
// };

function myfunc3() {
  let obj = {
    num: 20,
    temp: function func() {
      console.log("temp: ", this, this.num);
    },
    temp2: () => {
      console.log("temp2: ", this, this.num);
    },
  };
  obj.temp();
  obj.temp2();
}

myfunc3();

let stud_name = ["Abhinav", "Aditya", "Ajay", "Anjali"];

stud_name.forEach((student, i) => {
  student + "__";
});

let new_stud_name = stud_name.map((student, i) => {
  return student + "__";
});

console.log({ new_stud_name }, { stud_name });

let marks = [30, 35, 40, 25, 20];
let filteredMarks = marks.filter((m, i) => m > 25);
console.log({ filteredMarks });
// a =0
//a = a+ 30 = 30
//a = a+ 35 = 65
let total = marks.reduce((a, b) => {
  console.log("a, b: ", a, b);
  return a * b;
});

console.log({ total });

setTimeout(() => {
  console.log("Hello Aditya!!!");
  setTimeout(() => {
    console.log("Hello Abhinav!!!");
  }, 2000);
}, 3000);

/*
Real DOM List
  List:
   Sashi
   Abhinav
   Tanya //This is the only change in Real DOM

  VIRTUAL DOM List
  List:
    Sashi
    Abhinav
    Tanya


  Real DOM List
  List:
   Sashi
   Abhinav
   Tanya

  VIRTUAL DOM List
  List:
    Abhinav
    Tanya
    Sashi

  New List
   Abhinav
   Tanya
   Sashi  



   After using Key Props

   Real DOM List
  List:
  1. Sashi
  2. Abhinav

  VIRTUAL DOM List
  List:
  1.  Sashi
  2.  Abhinav
  3.  Tanya


  Real DOM List
  List:
  1. Sashi
  2. Abhinav
  3. Tanya //Change in Real DOM

  VIRTUAL DOM List
  List:
  2.  Abhinav
  3.  Tanya
  1.  Sashi

*/

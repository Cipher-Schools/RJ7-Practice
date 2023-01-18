var num = 20;
var num3;
// console.log(num);
// console.log("num2: ", num2); //undefined
// console.log({ num2 }); //{num2: undefined}
// console.log(`num: ${num}`);

function func() {
  //var num2;
  var num2 = 30;
}
func();

var num3 = 50;

function func2() {
  //   console.log({ num4 });
  function func3() {
    //var num4;

    var num4 = 40;
  }
}

function myfunc(val) {
  console.log(this); // window obj
  this.value = val;
  console.log(this.value); //20
}

var obj = new myfunc(20);

console.log(obj.value); //20

// console.log(this);

// function func() {
//   let obj = {
//     num: 20,
//     temp: function () {
//       console.log(this.num);
//     },
//   };
//   obj.temp();
//   console.log(this);
// }

// func();

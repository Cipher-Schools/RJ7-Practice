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

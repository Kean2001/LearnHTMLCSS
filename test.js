var a = 1;

function do1() {
  var a = 2;
  return a;
}

function do2 () {
  a = 2;
  return a;
}

var a = 2;
do1();
console.log(a);


do2();
console.log(a);
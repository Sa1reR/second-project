var button = document.getElementById("button");
var button2 = document.getElementById("button2");
var a = document.getElementById("input");
var b = document.getElementById("input2");
var c = document.getElementById("input4");
function mod(a, b, c) {
  c = a % b;
  return c;
}
function div(a, b) {
  return (a - (a % b)) / b;
}
function ng(a, b, c, p, s) {
  p = (a + b + c) / 2;
  s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  return s;
}

button.addEventListener("click", function () {
  var a = parseInt(input.value);
  var b = parseInt(input2.value);
  input3.value = mod(a, b);
});
button2.addEventListener("click", function () {
  var a = parseInt(input.value);
  var b = parseInt(input2.value);
  input3.value = div(a, b);
});
button3.addEventListener("click", function () {
  var a = parseInt(input.value);
  var b = parseInt(input2.value);
  var c = parseInt(input4.value);
  input3.value = ng(a, b, c);
});

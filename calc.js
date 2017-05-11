var add = function(){
  var firstNumber = parseFloat(document.getElementById('firstNumber').value);
  var secondNumber = parseFloat(document.getElementById('secondNumber').value);

  var output = document.getElementById('output');
  var total = firstNumber + secondNumber;
  output.textContent = "Total = " + total;
};

var sub = function(){
  var firstNumber = parseFloat(document.getElementById('firstNumber').value);
  var secondNumber = parseFloat(document.getElementById('secondNumber').value);

  var output = document.getElementById('output');
  var total = firstNumber - secondNumber;
  output.textContent = "Total = " + total;
};

var mul = function(){
  var firstNumber = parseFloat(document.getElementById('firstNumber').value);
  var secondNumber = parseFloat(document.getElementById('secondNumber').value);

  var output = document.getElementById('output');
  var total = firstNumber * secondNumber;
  output.textContent = "Total = " + total;
};

var div = function(){
  var firstNumber = parseFloat(document.getElementById('firstNumber').value);
  var secondNumber = parseFloat(document.getElementById('secondNumber').value);

  var output = document.getElementById('output');
  var total = firstNumber / secondNumber;
  output.textContent = "Total = " +  total;
};

var cl = function(){
  document.getElementById('firstNumber').value = "";
  document.getElementById('secondNumber').value = "";

  var output = document.getElementById('output');
  output.textContent = "Total = ";

};

function Display(num) {
    document.getElementById('display').value += num;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    var expression = document.getElementById('display').value;
    try {
      var result = eval(expression);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
      }
    }
  
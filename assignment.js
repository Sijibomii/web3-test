let operation= prompt('Enter the sign for operation +, -, *, /');
let number1=prompt('Enter number 1');
while(isNaN(parseFloat(number1))){
  number1=prompt('Enter a valid number 1');
}
let number2= prompt('enter number 2');
while(isNaN(parseFloat(number2))){
  number2=prompt('Enter a valid number 2');
}
fun();
function fun (){
  if (operation==='+'){
    //add
    alert(number1 + number2)
  }else if(operation==='-'){
    //subtract
    alert(number1 - number2)
  }else if(operation==='*'){
    //multiply
    alert(number1 * number2)
  }else if(operation==='/'){
    //divide
    alert(number1 / number2)
  }else{
    alert('not a valid operation')
  }
}
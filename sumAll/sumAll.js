var sumAll = function(num1, num2) {

let const1 = num1;
let const2 = num2;

  if(num1 < 0 || num2 < 0){ // if negative numbers
    return "ERROR";
  }
  if(!Number.isInteger(num1) || !Number.isInteger(num2)){ // if not a number
    return "ERROR";
  }
  if(num1 < num2){              // if num1 is less than num2
    for(i = num1; i <= num2; i++){
      num1 += i;
    }
  return num1 - const1;
  }
  if(num2 < num1){              // if num2 is less than num1
    for(i = num2; i <= num1; i++){
        num2 += i;
    }
  return num2 - const2;       // if the numbers are the same
  }
  if(num1 == num2){
    return "the numbers are equal";
  }
}

module.exports = sumAll

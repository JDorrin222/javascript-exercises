var caesar = function(str, num) {
  let newStr = [];
  for(i=0; i < str.length; i++){
    let charCode = str.charCodeAt(i);
    if(num < 0){
      num = num %26 + 26;
    }
    if(charCode < 65 || charCode > 122){ // commas and stuff
      newStr.push(String.fromCharCode(charCode));
    }else if (charCode > 64 && charCode < 91){ // uppercase letters
       num2 = ((charCode - 65 + num) % 26) + 65;
        newStr.push(String.fromCharCode(num2));
        // need something to loop here
    }else if(charCode > 96 && charCode < 123){ //lowercase letters
      num2 = ((charCode - 97 + num) % 26) + 97;
      newStr.push(String.fromCharCode(num2 ));
      //need looper here
    }
  }
return newStr.join("");
}
module.exports = caesar
//

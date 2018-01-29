var ftoc = function(tempf) {
  result = (tempf - 32)*(5/9);
  return Math.round(result*10)/10;
}

var ctof = function(tempc) {
  result = (tempc*(9/5)) + 32;
  return Math.round(result*10)/10;
}

module.exports = {
  ftoc,
  ctof
}

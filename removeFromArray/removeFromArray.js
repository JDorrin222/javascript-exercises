
var removeFromArray = function(...args) {
  const array = args[0] // sets the array as the first argument (arg[0])
  return array.filter(val => !args.includes(val)) // returns array which filters for values not included in the arguments 
}

module.exports = removeFromArray

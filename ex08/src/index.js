
var total = 0;
function funWithArg(digit){
total = (digit + 9) / 5;
return total;
}

console.log(funWithArg(6));
console.log(total);
module.exports = funWithArg;
var sum = 0;
function addThree(){
sum = sum + 3;
}

addThree();
console.log(addThree());

function addFive() {
sum = sum + 5;  
}
addFive();
console.log(addFive());
// Only change code above this line
module.exports = {
    addThree,
    addFive
};



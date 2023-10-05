// Higher Order Function
// function which takes another function as an arguments is called HOF.

// Callback Function
// function which get passed as an argument to another function is called call back.

// calculator
const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const mul = (a, b) => {
    return a * b;
}

// Master function HOF
const calculator = (num1, num2, operator)=>{
    return operator(num1, num2);
}
// callback function
console.log(calculator(5,6,add));
console.log(calculator(5,6,sub));
console.log(calculator(5,6,mul));
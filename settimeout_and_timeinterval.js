//Set Timeout allows us to run a function once after the interval of time.
//Clear timeout is used to cancel the execution (in case we change our mind).
//Set Interval means execute again and again after a particular gap.
document.write("hello")
const sum = (a, b, c) => {
    console.log("yes i am running" + (a + b + c))}
    setTimeout(sum, 1000, 1, 2, 7)

    setInterval(function(){
        alert("SetInterval")
    }, 3000)

let a = setTimeout(function(){
    alert("I am inside of settimeout")
}, 5000)
let b = prompt("Do you want to run the settimeout?")
if("n" == b){
    clearTimeout(a)
}
console.log(a)
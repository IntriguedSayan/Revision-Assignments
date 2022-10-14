
// Scope

// let a=100


// {
//     var x=10
//     // console.log(x)
//     // console.log(a)
// }

// console.log(a)
// console.log(x)

// function myFun(){

//     var x=10



// }
// console.log(x)

// {
//     let a = 7

// }
// console.log(a)






// Scope.

// let sum=0
// for(var i=0;i<10;i++){

//     sum=sum+i


// }
// console.log(sum)
// console.log(i)

// const y=10
// y=5
// console.log(y)










// function declaration 
// console.log(functnName(5))

// function functnName(x){

//         return x+2

// }











//function expression
// console.log(x(5,4))

// let x = function(a,b){

//     return a*b

// }








// IIFE(Immediately Invoked Functions)


// (function(){

//     let addNums=4+6
//     // return (addNums)
//     console.log("IIFE is invoked")
// })()








const factorial=function fact(n){

    if(n<2){
        return 1
    }

    return n*fact(n-1)

}

console.log(factorial(5))


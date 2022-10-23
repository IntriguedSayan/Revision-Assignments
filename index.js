
// Scope

// import { func } from "prop-types";
// import { useEffect } from "react";

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








// const factorial=function fact(n){

//     if(n<2){
//         return 1
//     }

//     return n*fact(n-1)

// }

// console.log(factorial(5))


// const b=10
// let a=10

// if(b===10){
//     let a=5
// }

// var func1=function func2(){

//     console.log("")
// }

// func1()
// func2()

// let nums=[1,2,3,4,4]

// let out=nums.forEach((elem,index)=>index%2===0)

// console.log(out)


// function fun(a,...b){

//     console.log(arguments.length)

// }

// fun(3,"afa","dfsd")

// const amar={money:1000}

// const akbar=Object.create(amar)

// const anthony=Object.create(akbar)

// console.log(anthony.money)

// console.log(a)
// console.log(b)

// var a=10
// let b=20

// var a=1

// setTimeout(()=>{

//     console.log(a)

// },0)

// for(let i=0;i<10;i++){}
// a++


// let arr=[]

// for(let i=1;i<5;i++){

//     arr.push(()=>{
//         console.log(i)
//     })

// }

// arr.forEach((el)=>el())

// var a;
// function x(){
//     a=10
// }

// console.log(a)




// const toggle=toggler(1,2,3)

// toggle()

// toggle()

// toggle()

// let count=0
// for(let i=42;i<=102;i++){
//     if(i%4===0 ){
//         count++
//     }
// }
// console.log(count)
// console.log((118+124+142+83+141)%39)






// export default function Index(){


//     const [data,setData]=useState([])


//     useEffect(()=>{

//         fetch("http://reqres.in/api/users")
//         .then((res)=>res.json())
//         .then((res)=> setData(res))
//         .catch((err)=>console.log(err))

//     },[])
    

//     return(

//         <ul>
//         {
//             data.map((elem)=>(
//                 <li key={elem.id}>{elem.title}</li>
//             ))
//         }
//         </ul>



//     )
// }







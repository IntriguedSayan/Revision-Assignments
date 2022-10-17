
const getTotalData=async()=>{
   
    let res=await fetch(`https://jsonplaceholder.typicode.com/albums`)
    res=await res.json()
    let totalDataLength=res.length 
    console.log(totalDataLength)

}

function getDataByLimit(page,limit){

    fetch(`https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=${limit}`)
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

}
const takeValue=()=>{

    const selectedValue=document.getElementById("#slct").value 


}



getTotalData()
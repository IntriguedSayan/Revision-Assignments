
const getTotalData=async()=>{
   console.log("gtd")
    let res=await fetch(`https://jsonplaceholder.typicode.com/albums`)
    res=await res.json()
    let totalDataLength=await res.length 
    console.log(typeof(totalDataLength))
    return totalDataLength

}
const showData=(res)=>{


    let content=document.getElementById("content")
    content.innerHTML=null
    console.log(11)
    res.forEach(elem => { 

        let box=document.createElement("div")
        let H3=document.createElement("h3")
        let para=document.createElement("p")
        let inBox1=document.createElement("div")
        let inBox2=document.createElement("div")

        H3.innerText=elem.id 
        para.innerText=elem.title 
        
        H3.style.marginLeft="10%"
        inBox1.style.width="50%"
        inBox2.style.width="50%"
        inBox1.style.textAlign="left"
        box.style.display="flex"
        box.style.justifyContent="space-around"
        box.style.borderBottom ="1px solid orange"

        inBox1.append(H3)
        inBox2.append(para)
        box.append(inBox1,inBox2)
        content.append(box)
    });

}
async function getDataByPageAndLimit(page,limit){

    console.log("gdpal")
    try{

        let res = await fetch(`https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=${limit}`)
        res = await res.json()
        console.log(res)
        showData(res)

    }catch(err){
        console.log(err)
    }
    

   

}

const getDataByLimit=async(limit)=>{

try{
    let res = await fetch(`https://jsonplaceholder.typicode.com/albums?_limit=${limit}`)
    res=await res.json()
    console.log(res)
    showData(res)
}catch(err){
    console.log(err)
}


}

const createButtons=(buttonNumbers,selectedValue)=>{

    console.log("cb")
    let paginateDiv=document.getElementById("paginateDiv")
    paginateDiv.innerHTML=null
    for(let i=0;i<buttonNumbers;i++){
       
        
        const btn=document.createElement("button")
        btn.innerText=i+1

        btn.addEventListener("click",()=>{
            getDataByPageAndLimit(Number(btn.innerText),selectedValue)
        })
        paginateDiv.append(btn)


    }

}


const takeValue=async()=>{

   
    var selectedValue=document.querySelector("select").value
    selectedValue=Number(selectedValue) 
    console.log(typeof(selectedValue))
    const totalDataLength = await getTotalData()
    console.log(typeof(totalDataLength))
    const  buttonNumbers = Math.ceil(Number(totalDataLength)/selectedValue)
    console.log(buttonNumbers)

    createButtons(buttonNumbers,selectedValue)

    getDataByLimit(selectedValue)

}




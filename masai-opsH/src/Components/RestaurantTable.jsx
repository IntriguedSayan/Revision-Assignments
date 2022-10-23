import { useEffect, useState } from "react"
import { RestaurantCard } from "./RestaurantCard"

function RestaurantTable(){

    const [resData,setResData] = useState([])

  useEffect(()=>{

      fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=1&limit=5")
      .then((res)=>res.json())
      .then((res)=>setResData(res.data))
      .catch((err)=>console.log(err))
    
  },[])


    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Type</th>
                        <th>Number of Votes</th>
                        <th>Price Starts From</th>
                    </tr>
                </thead>
                <tbody>
                    {resData.map((item) => {
                        return <RestaurantCard key={item.id} name={item.name} number_of_votes={item.number_of_votes} price_starts_from={item.price_starts_from} type={item.type} rating={item.rating} />
                    })}
                </tbody>
            </table>
    )
}

export default RestaurantTable
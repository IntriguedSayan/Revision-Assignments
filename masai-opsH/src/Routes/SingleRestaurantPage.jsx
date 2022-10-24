import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



function SingleRestaurantPage() {

  const [singleRes,setSingleRes] = useState({})
  const {id} = useParams()

  useEffect(()=>{

    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
      .then((res)=>res.json())
      .then((res)=>setSingleRes(res.data))
      .catch((err)=>console.log(err))

  },[])

  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name"></h3>
      </div>
      <div data-testid="restaurant-type">Type: {singleRes.type}</div>
      <div data-testid="restaurant-rating">Rating: {singleRes.rating}</div>
      <div data-testid="restaurant-votes">Votes: {singleRes.number_of_votes}</div>
      <div data-testid="restaurant-price">Starting Price: {singleRes.price_starts_from}</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;

// : 
// id
// : 
// 1
// image
// : 
// "https://picsum.photos/200"
// name
// : 
// "Shute"
// number_of_votes
// : 
// 588
// price_starts_from
// : 
// 925
// rating
// : 
// 4.5
// type
// : 
// "fine_dining"
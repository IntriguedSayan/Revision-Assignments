import { useContext, useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";
import { LOGOUT_SUCCESS } from "../Context/actionTypes";
import { AppContext } from "../Context/AppContext";


function Dashboard() {

  const [state,dispatch] = useContext(AppContext)

  const [resData,setResData] = useState([])
  const [totalPages,setTotalPages] = useState(10)
  const [page,setPage] = useState(1)

  const handleLogout=()=>{

    dispatch({type:LOGOUT_SUCCESS})

  }

  const handlePageChange=(i)=>{

      setPage(i) 

  }

  useEffect(()=>{

    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`)
      .then((res)=>res.json())
      .then((res)=>{
        setResData(res.data)
        setTotalPages(res.totalPages)
      })
      .catch((err)=>console.log(err))
    
  },[page])

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={handleLogout} >Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{state.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={resData} />
      </div>
      <div data-testid="pagination-container">
        <Pagination totalPages={totalPages} currentPage={page} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default Dashboard;

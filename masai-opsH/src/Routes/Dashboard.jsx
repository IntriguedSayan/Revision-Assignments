import { useContext, useEffect, useState } from "react";
import RestaurantTable from "../Components/RestaurantTable";
import { AppContext } from "../Context/AppContext";



function Dashboard() {

  const [state] = useContext(AppContext)


  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{state.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable />
      </div>
      <div data-testid="pagination-container"></div>
    </div>
  );
}

export default Dashboard;

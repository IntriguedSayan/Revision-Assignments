import React, { useEffect, useState } from "react";
import { getProducts } from "./api";
import Pagination from "./Pagination";
import ProductList from "./ProductList";

function ProductPage() {

  const[productData,setProductData] = useState([])
  const[page,setPage] = useState(1)
  const[limit,setLimit] = useState(5)
  const[sort,setSort] = useState("asc")

  const sortAscending=()=>{

     setSort("asc")

  }

  const sortDescending=()=>{

     setSort("desc")

  }
  
  const handlePrev=()=>{

    setPage((prev)=>prev-1)

  }
  const handleNext=()=>{

    setPage((prev)=>prev+1)

  }

  const handleLimit=(e)=>{

    setLimit(e.target.value)

  }


  useEffect(()=>{

    getProducts(page,sort,limit)
    .then((res)=>setProductData(res.data))

  },[page,sort,limit])

  const prev = <button data-testid="prev-page" disabled={page===1} onClick={handlePrev}>PREV</button>;
  const currentPage = <button data-testid="current-page">{page}</button>;
  const next = <button data-testid="next-page" onClick={handleNext}>NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{Math.ceil(38/limit)}</b>{" "}
    </div>
  );

  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button data-testid="low-to-high" onClick={sortAscending}>Sort low to high</button>
      <button data-testid="high-to-low" onClick={sortDescending}>Sort high to low</button>
      <div>
        <label>Per page</label>
        <select data-testid="limit-select" onChange={(e)=>handleLimit(e)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      <Pagination prev={prev} currentPage={currentPage} next={next} totalPagesElem={totalPagesElem} />
      {/* map products */}
      <ProductList productData={productData} />
    </div>
  );
}

export default ProductPage;

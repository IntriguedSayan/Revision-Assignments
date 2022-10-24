

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({totalPages,currentPage,handlePageChange}){

  let pages = createArrayOfSize(totalPages).map((a,i) => {
         return <button data-testid="page-btn" key={i+1} disabled={currentPage===i+1} onClick={()=>handlePageChange(i+1)} >{i+1}</button>;
  });

  return <div style={{marginTop:"2%"}} >
      {pages}
  </div>;

}

export default Pagination;

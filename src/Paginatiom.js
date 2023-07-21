import React from 'react'
import { useGlobalContext } from './Context'

function Paginatiom() {

  const {page,nbPages, getPrevPage,getNextPage }=useGlobalContext();

  return (
    <>
    <div className="pagination-btn">
      <button onClick={()=> getPrevPage()}>PRE</button>
      <p>{page+1} of {nbPages}</p>
      <button onClick={()=>getNextPage()}>NEXT</button>
    </div>
    </>
  )
}

export default Paginatiom
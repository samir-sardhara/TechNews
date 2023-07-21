import React from 'react'
import { useGlobalContext } from './Context'

function Search() {

const {query,searchPost}=useGlobalContext();

  return (
    <>
    <div>
      <h1>Tech News On The Go</h1>
      <form onSubmit={(e)=>e.preventDefault()} >
        <div>
          <input type="text" placeholder='search here'
          value={query}
          onChange={(e)=>searchPost(e.target.value)} />
        </div>
      </form>
    </div>
    </>
  )
}

export default Search
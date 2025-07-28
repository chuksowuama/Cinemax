import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Card from '../Components/Card'
import Pagination from '../Components/Pagination'

const Movies = () => {
  const location=useLocation()
  const searchedMovie=location.state?.searchfilter
  const[searchItem,setSearchitem]=useState([])
  const[currentpage,setCurrentpage]=useState(1)
  const itemsperpage=10

  useEffect(()=>{
    if(searchedMovie){
      setSearchitem(searchedMovie)
    }
  },[searchedMovie])
     
  const totalpage= Math.ceil(searchItem.length / itemsperpage)
  const lastindex= currentpage * itemsperpage
  const firstIndex= lastindex - itemsperpage 
  const Searchedpage= searchItem.slice(firstIndex,lastindex)
  return (
   <>
    <div>
          <div className="min-h-screen bg-gray-950 text-white my-11 py-5">
      {/* Header */}
          <header className="w-full bg-gray-900 py-6 px-4">
        <h1 className="text-3xl font-bold text-center">Search Results</h1>
        <p className="text-center text-gray-400 mt-10">
          Results for: <span className="text-white font-semibold">{searchItem.name}</span>
        </p>
      </header>
      
      {/* Results Grid */}
      <main className="max-w-7xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Search Result Card */}
           {
            Searchedpage.map((item)=>(
              <Link>
               <Card
                 imageUrl={item.image?.medium}
                 title={item.name}
                 year={item.premiered}
                 genres={item.genres}
               />
              </Link>
            ))
           }
        </div>
      </main>

      {/* Pagination (if needed) */}
      <Pagination
        totalPage={totalpage}
       currentpage={currentpage}
       onpageChange={(page)=>setCurrentpage(page)}
      />
    </div> 
    </div>
   </>
  )
}

export default Movies

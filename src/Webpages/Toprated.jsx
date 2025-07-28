import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
import { isRejected } from '@reduxjs/toolkit'
import Pagination from '../Components/Pagination'

const Toprated = () => {
  const[Toprated,setToprated]=useState([])
  const topRated=useSelector(state=>state.stored.items)
  const[currentpage,setCurrentpage]=useState(1)
  const itemsperpage=10


  const totalpage= Math.ceil(Toprated.length / itemsperpage)
  const lastindex= currentpage * itemsperpage
  const firstIndex= lastindex - itemsperpage 
  const Topratedpage= Toprated.slice(firstIndex,lastindex)
  
  useEffect(()=>{
   const topseries=topRated.filter(item=>item.rating?.average>=8)
   if(topseries){
    setToprated(topseries)
   }
  },[topRated])

   

  return (
   <>
       <div className="min-h-screen bg-gray-950 text-white my-11 py-5">
      {/* Header */}
      <header className="w-full bg-gray-900 py-6 px-4">
        <h1 className="text-3xl font-bold text-center">Top Rated Series</h1>
        <p className="text-center text-gray-400 mt-2">
          Discover the highest-rated TV shows
        </p>
      </header>

      {/* Top Rated Series Grid */}
      <main className="max-w-7xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Series Card */}
           {
            Toprated && Topratedpage.map(item=>(
              <Link to={`/details/${item.name}`}>
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

      {/* Pagination */}
      <Pagination
       totalPage={totalpage}
       currentpage={currentpage}
       onpageChange={(page)=>setCurrentpage(page)}
      />
    </div>
   </>
  )
}

export default Toprated

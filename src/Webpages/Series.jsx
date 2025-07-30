import React, { useEffect, useState } from 'react'
import SeriesSidefilter from '../Components/SeriesSidefilter';
import Card from '../Components/Card';
import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import Pagination from '../Components/Pagination';

const Series = () => {
  const[serieslist,setSerieslist]=useState([])
  const Location=useLocation()
  const filteredSeries=Location.state?.filteredCategories
  const movies=useSelector(state=>state.stored.items) 
  const[GenreId,setGenreId]=useState()
  const itemsperPage=50
  const {genreId}=useParams()
  const[currentPage,setcurrentPage]=useState(1)



    useEffect(()=>{
    if(genreId){
     const IDgenre=movies.filter(item=>item.genres.some(gen=>gen.toLowerCase()===genreId.toLowerCase()))
     setGenreId(IDgenre)
    }
  
  },[genreId])
  

  const displayfilteredSeries=genreId?GenreId || []: filteredSeries&&filteredSeries.length>0?filteredSeries: movies?movies:[];
  const totalPages= Math.ceil(displayfilteredSeries.length/itemsperPage)
  const indexofLastitem=currentPage * itemsperPage
  const indexoffirstItem=indexofLastitem-itemsperPage
  const currentItems= displayfilteredSeries.slice(indexoffirstItem,indexofLastitem)
    
  return (
   <>
    <div className="min-h-screen bg-gray-950 text-white my-11 py-5">
      {/* Header */}
      <header className="w-full bg-gray-900 py-6 px-4">
        <h1 className="text-3xl font-bold text-center">Series</h1>
        <p className="text-center text-gray-400 mt-2">
          Discover and filter your favorite TV shows
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
         <SeriesSidefilter/>
        {/* Main Content (Grid) */}
        <main className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
            {/* Example Card */}
                  {
          displayfilteredSeries&& currentItems.map(item=>(
               <Link to={`/details/${item.name}`}>
                <Card
                imageUrl={item.image?.medium}
              title={item.name}
              year={item.premiered}
                />
               </Link>
          ))
        }
          </div>

          {/* Pagination */}
          <Pagination
           currentpage={currentPage}
           totalPage={totalPages}
           onpageChange={(page)=>setcurrentPage(page)}
          />
        </main>
      </div>
    </div>
   </>
  )
}

export default Series

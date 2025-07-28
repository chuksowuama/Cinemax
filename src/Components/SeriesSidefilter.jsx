import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const initialFilters = {
  genre: "",
  Releasedate: "",
  ratings: ""
};

const SeriesSidefilter = () => {
    const movies=useSelector(state=>state.stored.items)
     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
     const [startwithletter,setStartwithletter]=useState("")
    const [category,setcategory]=useState([])
    const [filteredcategory,setfilteredcategoty]=useState(initialFilters)
   const navigate=useNavigate()

    function handlechangecategory(e){
        const{name,value}=e.target
        setfilteredcategoty((prev)=>({...prev,[name]:value}))
    }

    function handleindex(ind){ 
      setStartwithletter(ind)
    }

    function handlesubmitcategory(){
        const filteredGenre=movies.filter(items=>{
            const matchedGenres= filteredcategory.genre?
            items.genres.find(item=>item.toLowerCase()===filteredcategory.genre.toLowerCase())
            :true;
            

            const premiered1=items.premiered.split("-")[0]
            const premiered2=items.premiered.split("-")[1]
            const matchedYear= filteredcategory.Releasedate?
              premiered1 >= parseInt(filteredcategory.Releasedate.split("-")[0])&&
              premiered2 <= parseInt(filteredcategory.Releasedate.split("-")[1])
            :true
            console.log(matchedYear)

            const matchedRatings=filteredcategory.ratings?
            items.rating?.average>=parseInt(filteredcategory.ratings)
            :true
           
           const matchedletter=startwithletter? 
           items.name.toLowerCase().startsWith(startwithletter.toLowerCase())
           :true
            console.log(matchedletter)

            return matchedGenres&&matchedYear&&matchedRatings&&matchedletter
        })
        setfilteredcategoty(initialFilters)
        setStartwithletter("")
        navigate("/series",{state:{filteredCategories:filteredGenre}})
    }

  return (
  <>
   <aside className="w-full lg:w-1/4 bg-gray-900 p-6 rounded-lg h-fit">

          {/* Genre Filter */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">Genre</label>
            <select className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none"
            name='genre'
            value={filteredcategory.genre}
            onChange={handlechangecategory}
            >
              <option value="">All Genres</option>
              <option value="Drama">Drama</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Thriller">Thriller</option>
              <option value="Sci-fi">Sci-Fi</option>
              <option value="Fantasy">Fantasy</option>
            </select>
          </div>

          {/* Year Filter */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">Year</label>
            <select className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none"
            name='Releasedate'
            value={filteredcategory.Releasedate}
            onChange={handlechangecategory}
            >
              <option value="">Any Year</option>
              <option value="2010-2014">2010-2014</option>
              <option value="2005-2010">2005-2010</option>
              <option value="2000-2004">2000-2004</option>
            </select>
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">
              Minimum Rating
            </label>
            <select className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none"
            name='ratings'
            value={filteredcategory.ratings}
            onChange={handlechangecategory}
            >
              <option value="">Any Rating</option>
              <option value="9">9+ stars</option>
              <option value="8">8+ stars</option>
              <option value="7">7+ stars</option>
              <option value="6">6+ stars</option>
            </select>
          </div>

          {/* Filter by First Letter */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-3">
              Filter by First Letter
            </label>
            <div className="grid grid-cols-6 gap-2">
              {alphabet.map((letter,index) => (
                <button
                  key={letter}
                  className="bg-gray-800 hover:bg-gray-700 rounded-lg py-1 text-sm"
                  onClick={()=>handleindex(letter)}
                  value={filteredcategory.name}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg" onClick={handlesubmitcategory}>
            Apply Filters
          </button>
        </aside>
  </>
  )
}

export default SeriesSidefilter

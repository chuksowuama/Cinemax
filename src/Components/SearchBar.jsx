import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Movies from '../Webpages/Movies'
// import { setFilteredSearch } from '../Reduxindex'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({remove}) => {
    const[searchvalue,setSearchValue]=useState("")
    const [filteredMovies,setFilteredMovies]=useState([])
    const movies=useSelector(state=>state.stored.items)
    const dispatchsearched=useDispatch()
    const searched=useSelector(state=>state.stored.items)
      

     const navigate=useNavigate()



    function handlesearchvalue(e){
      const targ=e.target.value
       setSearchValue(targ)
    }

    function handlefindMovie(){
         let filteredmovies= movies.filter(item=>item.name.toLowerCase().includes(searchvalue.toLowerCase()))
        if(searchvalue.trim()!==""){
             navigate("/movies",{state:{searchfilter:filteredmovies}})
        }

        setSearchValue("")
    }

  return (
    <>
    <div className='backdrop-blur-md bg-bgroundcolor/90 py-1.5 px-2 flex justify-center items-start gap-1.5 mt-20
      sm:sticky sm:left-0 top-17 w-full h-[100vh]
      md:sticky  z-40
    '>
     <div className='mt-10 w-[80%] flex justify-center gap-2.5' >
       <input type="text" name="" id="" value={searchvalue} onChange={handlesearchvalue} className='border border-Accent w-[90%] p-1 text-white focus:bg-whiyte' />
      <button onClick={handlefindMovie} className='cursor-pointer'><i class="fa-solid fa-magnifying-glass text-white text-2xl hover:text-Accent" onClick={remove}></i></button>
     </div>
    </div>
    </>
  )
}

export default SearchBar

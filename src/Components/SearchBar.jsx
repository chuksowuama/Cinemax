import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Movies from '../Webpages/Movies'
// import { setFilteredSearch } from '../Reduxindex'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
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
    useEffect(()=>{
        console.log(filteredMovies)
    },[filteredMovies])
  return (
    <>
    <div className='border border-white rounded-2xl py-1.5 px-2 flex justify-between gap-1.5 bg-white'>
      <input type="text" name="" id="" value={searchvalue} onChange={handlesearchvalue} className='border-none outline-transparent' />
      <button onClick={handlefindMovie} className='cursor-pointer'><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
    </>
  )
}

export default SearchBar

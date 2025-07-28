import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllmovies, setHerosectionslide } from '../Reduxindex'

const Mymovies = () => {
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState(false)
    const Moviedispatch=useDispatch()
    let page=0
    // const Movies=useSelector(state=>state.stored.items)
    useEffect(()=>{
      async function fetchMovies(){
       try {
        const rep=await fetch(`https://api.tvmaze.com/shows?page=${page}`)
        const data= await rep.json()
         if(rep.ok){
         Moviedispatch(setAllmovies(data))
         Moviedispatch(setHerosectionslide())
         }
       } catch (error) {
        setError(error)
       }
      }
      fetchMovies()
    },[])
}

export default Mymovies

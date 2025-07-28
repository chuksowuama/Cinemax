import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'
import Card from '../Components/Card'

const Details = () => {
    const[movieDetails,setmovieDetails]=useState([])
    const[randomsug,setrandom]=useState([])
    const[suggestions,setsuggestions]=useState([])
  const{movieId}=useParams()
  const Movie=useSelector(state=>state.stored.items)

  useEffect(()=>{
    const details= Movie.find(item=>item.name===String(movieId))
    if(details){
        setmovieDetails(details)
    }
  },[Movie,movieId])

  useEffect(()=>{
  const random=Math.floor(Math.random()* Movie.length )
  const randomId= Movie.find(item=>item.id===Number(random))
  setrandom(randomId)
  },[Movie])

  useEffect(()=>{
    const length=randomsug?.genres?.length??0
    const randomss=Math.floor(Math.random()* length )
    const selectedGenre=randomsug?.genres?.[randomss]
    const radomsuggestion=Movie.filter(item=>selectedGenre? item.genres.includes(selectedGenre):null )
    const suggestion=radomsuggestion.slice(0,4)
    setsuggestions(suggestion)
    // suggestion.map(item=>setsuggestions(item))
  },[Movie,randomsug])
  

  return (
    <>
 <div className="bg-[#121212] text-gray-200 min-h-screen mt-90">
         <img
          src={movieDetails.image?.original}
          alt="Series Banner"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212cc] to-transparent p-6 md:p-12 flex flex-col justify-end">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{movieDetails.name}</h1>
          <p className="text-sm text-gray-300 mt-2">2024 • Drama • 3 Seasons</p>
        </div>
        </div>

{/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">
        {/* Left Column - Poster */}
        <div className="md:col-span-1">
          <img
            src={movieDetails.image?.original}
            alt="Series Poster"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column - Info */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-white">About the Series</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            {movieDetails.summary? movieDetails.summary.replace(/<[^>]+>/g,``):" No summary available."}
          </p>

          {/* Genres / Tags */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full">{movieDetails.genres?.[0]}</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full">{movieDetails.genres?.[1]}</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full">{movieDetails.genres?.[2]}</span>
          </div>

          {/* Cast */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Starring</h3>
            <p className="text-sm text-gray-400">Actor One, Actor Two, Actor Three</p>
          </div>

          {/* Seasons & Episodes */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Seasons</h3>
            <div className="grid gap-4">
              <div className="bg-[#1e1e1e] rounded-lg p-4">
                <h4 className="text-white font-semibold">Season 1</h4>
                <p className="text-sm text-gray-400">10 Episodes</p>
              </div>
              <div className="bg-[#1e1e1e] rounded-lg p-4">
                <h4 className="text-white font-semibold">Season 2</h4>
                <p className="text-sm text-gray-400">12 Episodes</p>
              </div>
              <div className="bg-[#1e1e1e] rounded-lg p-4">
                <h4 className="text-white font-semibold">Season 3</h4>
                <p className="text-sm text-gray-400">8 Episodes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You Might Also Like */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-6">You Might Also Like</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            suggestions.map(item=>(
            <Link to={`/details/${item.name}`}>
              <Card
              imageUrl={item.image?.medium}
              title={item.name}
              year={item.premiered}
              />
            </Link>
            ))
          }
          {/* Duplicate for other suggestions */}
        </div>
      </div>
    </>
  )
}

export default Details

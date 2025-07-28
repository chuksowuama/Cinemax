import React from 'react'

const Card = ({ title, year, genres = [], imageUrl }) => {
  return (
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-lg transition hover:scale-105">
      {/* Poster */}
      <div className="aspect-[2/3] bg-gray-700">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 text-sm">
            No Image
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-3">
        <h2 className="font-semibold text-base truncate">{title}</h2>
        <p className="text-sm text-gray-400">
          {year || "Unknown Year"}
          {genres.length > 0 && ` • ${genres.slice(0, 2).join(", ")}`}
        </p>
      </div>
    </div>
  )
}

export default Card

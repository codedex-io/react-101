// Trending Now 🎬
// Codédex

import { useState } from "react";
import TrendingList from "./TrendingList";

export default function App() {
  const movieArray = [
    {
      title: "Hitchhiker's Guide to the Galaxy",
      releaseYear: 2005,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Hitchhikers_guide_to_the_galaxy.jpg"
    },
    {
      title: "Hitchhiker's Guide to the Galaxy",
      releaseYear: 2005,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Hitchhikers_guide_to_the_galaxy.jpg"
    },
    {
      title: "Hitchhiker's Guide to the Galaxy",
      releaseYear: 2005,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Hitchhikers_guide_to_the_galaxy.jpg"
    }    
  ];
  const [movieData, setMovieData] = useState(movieArray);

  // code here 💖

  return <TrendingList movies={movieData} />;
}
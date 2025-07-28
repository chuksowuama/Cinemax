import { Route, Routes } from "react-router-dom";
import Home from "./Webpages/Home";
import Movies from "./Webpages/Movies";
import Genres from "./Webpages/Genres";
import Series from "./Webpages/Series";
import Navigation from "./Components/Navigation";
import Mymovies from "./Components/Mymovies";
import Footer from "./Components/Footer";
import Details from "./Webpages/Details";
import Toprated from "./Webpages/Toprated";

function App() {
  return (
    <>
      <Navigation />
      <Mymovies/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
        {/* <Route path="/genres" element={<Genres/>} /> */}
        <Route path="/series" element={<Series/>} />
        <Route path="/top-rated" element={<Toprated/>}/>
        <Route path="/details/:movieId" element={<Details/>}/>
        <Route path="/genres/:genreId" element={<Series/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

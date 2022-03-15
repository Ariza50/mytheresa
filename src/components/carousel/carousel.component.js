import './carousel.styles.scss'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useGetCarousel from '../../hooks/useGetCarouselData';

const carouselComponent = ({ genreId }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(0);
  const navigate = useNavigate();
  const { priorMovie, currentMovie, nextMovie, isLoading } = useGetCarousel({ genre: genreId, movieId: selectedMovieId});

  const goToMovieDetails = (movie) => {
    navigate(`detail/${movie.id}`);
  };

  if (isLoading) {
    return null;
  }

  const priorImage = `https://image.tmdb.org/t/p/w500${priorMovie.poster_path}`;
  const currentImage = `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`;
  const nextImage = `https://image.tmdb.org/t/p/w500${nextMovie.poster_path}`;

  return (
    <div className="carousel">
      <div id="wrapper-start" onClick={() => goToMovieDetails(priorMovie)}>
        <img src={priorImage} alt={priorMovie.title} />
      </div>
      <button className="left" onClick={() => { setSelectedMovieId(priorMovie.id) }}>left</button>

      <div id="wrapper-current" onClick={() => goToMovieDetails(currentMovie)}>
        <div className="title">
          <h1>{currentMovie.title}</h1>
        </div>
        <img src={currentImage} alt={currentMovie.title} />
      </div>
      <button className="right" onClick={() => { setSelectedMovieId(nextMovie.id) }}>right</button>
      <div id="wrapper-end" onClick={() => goToMovieDetails(nextMovie)}>
        <img src={nextImage} alt={nextMovie.title} />
      </div>
    </div>
  )
}

export default carouselComponent;

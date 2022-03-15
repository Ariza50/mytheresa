import './carousel.styles.scss'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useGetCarousel from '../../hooks/useGetCarouselData';
import {useSelector} from '../../redux/store';

const carouselComponent = ({ genreId, carouselTitle }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(0);
  const navigate = useNavigate();
  const { priorMovie, currentMovie, nextMovie, isLoading } = useGetCarousel({ genre: genreId, movieId: selectedMovieId});
  const { configuration } = useSelector((state) => state.configuration);


  const goToMovieDetails = (movie) => {
    navigate(`detail/${movie.id}`);
  };

  if (isLoading) {
    return null;
  }

  const baseImageURL = configuration.imageURL + configuration.posterSize;

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">{carouselTitle}</h1>
      <div className="carousel">
        <div id="wrapper-start" onClick={() => goToMovieDetails(priorMovie)}>
          <img src={baseImageURL + priorMovie.poster_path} alt={priorMovie.title} />
        </div>
        <button className="left" onClick={() => { setSelectedMovieId(priorMovie.id) }}>left</button>

        <div id="wrapper-current" onClick={() => goToMovieDetails(currentMovie)}>
          <div className="title">
            <h1>{currentMovie.title}</h1>
          </div>
          <img src={baseImageURL + currentMovie.poster_path} alt={currentMovie.title} />
        </div>
        <button className="right" onClick={() => { setSelectedMovieId(nextMovie.id) }}>right</button>
        <div id="wrapper-end" onClick={() => goToMovieDetails(nextMovie)}>
          <img src={baseImageURL + nextMovie.poster_path} alt={nextMovie.title} />
        </div>
      </div>
    </div>
  )
}

export default carouselComponent;

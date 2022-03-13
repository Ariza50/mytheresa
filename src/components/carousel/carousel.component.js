import './carousel.styles.scss'
import {useState} from 'react';
import {useGetMovieByGenreQuery} from '../../redux/apiTheMoviedb';

const carouselComponent = ({ genreId }) => {
  const [selectedMovie, setSelectedMovie] = useState(5);
  const { data, isLoading } = useGetMovieByGenreQuery(28, 1);
  console.log("-> data", data);
  if (isLoading) {
    return null
  }

  return (
    <div className="carousel">
      <div id="wrapper-start">
        <img src="http://www.mattdrew.co.uk/experiments/images/ex-2point5d/background.jpg" alt="" />
      </div>
      <button>left</button>

      <div id="wrapper-current">
        <img src="http://www.mattdrew.co.uk/experiments/images/ex-2point5d/background.jpg" alt="" />
      </div>
      <button>right</button>
      <div id="wrapper-end">
        <img src="http://www.mattdrew.co.uk/experiments/images/ex-2point5d/background.jpg" alt="" />
      </div>
    </div>
  )
}

export default carouselComponent;

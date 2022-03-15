import {useGetMovieByGenreQuery} from '../redux/apiTheMoviedb';

const useGetCarousel = ({ genre, movieId }) => {
  const { data } = useGetMovieByGenreQuery(genre, 1);

  let movieIndex;
  movieId === 0
    ? movieIndex = 0
    : movieIndex = data?.results.findIndex(movie => movie.id === movieId);

  const currentMovie = data?.results[movieIndex];

  const priorMovie = movieIndex === 0
    ? data?.results[data.results.length - 1]
    : data?.results[movieIndex - 1];

  const nextMovie = movieIndex === data?.results.length - 1
    ? data?.results[0]
    : data?.results[movieIndex + 1];

  const isLoading = !priorMovie || !currentMovie || !nextMovie;

  return { priorMovie, currentMovie, nextMovie, isLoading };
}

export default useGetCarousel;


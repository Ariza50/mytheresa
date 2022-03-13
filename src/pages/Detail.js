import { useParams } from 'react-router-dom';

const Detail = () => {
  const { movieId } = useParams();
  return(
    <div className="container">Detail page for movieId {movieId}</div>
  );
}

export default Detail;

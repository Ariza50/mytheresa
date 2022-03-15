import CarouselComponent from '../components/carousel/carousel.component';
import useUpdateDefaultConfiguration from '../hooks/useGetConfigurationData';

const Home = () => {
  const { isLoading } = useUpdateDefaultConfiguration();

  if (isLoading) {
    return null;
  }
  return (
    <div className="container">
      <main>
        <CarouselComponent genreId={28} carouselTitle="Action" />
        <CarouselComponent genreId={14} carouselTitle="Fantasy" />
        <CarouselComponent genreId={37} carouselTitle="Western" />
      </main>
  </div>
  );
}

export default Home;

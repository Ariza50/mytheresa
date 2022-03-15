import {useGetConfigurationQuery} from '../redux/apiTheMoviedb';
import {modifyImageURL} from '../redux/slices/configuration.slice';
import {useDispatch} from '../redux/store';

const useUpdateDefaultConfiguration = () => {
  const { data, isLoading } = useGetConfigurationQuery();
  const dispatch = useDispatch();

  if (isLoading) {
    return { isLoading: true };
  }

  dispatch(modifyImageURL(data.images.secure_base_url));

  return { isLoading: false }
}

export default useUpdateDefaultConfiguration;

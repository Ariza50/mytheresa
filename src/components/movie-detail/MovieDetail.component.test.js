import React from 'react';
// import {Provider as ReduxProvider} from 'react-redux';
import {render} from '@testing-library/react';
import {useState as useStateMock} from 'react';
// import {PersistGate} from 'redux-persist/integration/react';
// import {persistor, store} from '../../redux/store';
import MovieDetailComponent from './MovieDetail.component';

const movie = {
    id: 565465,
    title: 'torrente',
    overview: 'descripción de la peli',
    poster_path: '/546465adsfads865.jpg',
    belongs_to_collection: null
};

const wishlist = [{ id: 564848 }];

const config = {
  imageURL: 'https://images.tmdb.org/t/p/',
  language: 'en-US',
  posterSize: 'w500',
  iconSize: 'w300'
}

jest.mock('../../redux/store', () => ({
  ...jest.requireActual('../../redux/store'),
  wishlistItems: {wishlist},
  configuration: config,
  useDispatch: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  wishlistItems: wishlist,
  configuration: config,
  useSelector: jest.fn(),
}));

jest.mock('../../redux/apiTheMoviedb', () => {
  return jest.fn(() => ({
    data: movie,
    isLoading: false,
  }));
});

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('render component', () => {
  const setState = jest.fn()
  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setState])
  });

  test('render component', () => {
    const component = render(<MovieDetailComponent movieId={656548} />);
    component.getByText(movie.title);
  });

});

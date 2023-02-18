import { lazy, Suspense } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import Cast from 'pages/MovieCard/Cast/Cast';
import Reviews from 'pages/MovieCard/Reviews/Reviews';
import { ToastContainer } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import { BrowserRouter } from 'components/helpers';

import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieCard = lazy(() => import('pages/MovieCard/MovieCard'));

export const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<HomePage />} />
              <Route path="movies" element={<MoviesPage />} />
              <Route path="movies/:movieId" element={<MovieCard />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};
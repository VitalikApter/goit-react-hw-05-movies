import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header/Header';

import { ToastContainer } from 'react-toastify';
import Loader from 'components/Loader/Loader';


import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieCard = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

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
      
    </>
  );
};

//routing
import { Routes, Route, Navigate } from 'react-router-dom';
//styles
import '../assets/scss/app.scss';
//components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Profile from '../components/Profile';
import Movies from '../components/movies';
import Comments from '../components/comments/index.js';
//authentication
import { useAuth0 } from '@auth0/auth0-react';
//error Handling
import Loading from '../components/common/Loading';

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate replace to="movies" />} />
            <Route path="/movies" element={<Movies />} />{' '}
            <Route path="/profile" element={<Profile />} />
            <Route path="/comments" element={<Comments />} />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
